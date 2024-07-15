import React, { useContext, useRef, useState } from "react";
import auth from "../../Firebase/firebase.config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loggedErr, setLoggedErr] = useState("");
  const [loggedSuccess, setLoggedSuccess] = useState("");
  const emailRef = useRef(null);
  const { signIn, signInWithGoogle } = useContext(authContext);
  console.log(signIn);
  const location = useLocation();
  console.log("location in the login page", location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setLoggedErr("");
    setLoggedSuccess("");
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setLoggedSuccess("login success");
        navigate(location?.state ? location.state : "/");
        // setUser(loggedInUser);
      })
      .catch((err) => {
        console.log(err);
        setLoggedErr(err.message);
      });
  };

  const handleGoogleLogin = () => {
    console.log("google mama is coming");

    signInWithGoogle()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleForgetPassword = (e) => {
    // console.log("send Password Reset Email", emailRef);
    const email = emailRef.current.value;
    if (!email) {
      console.log("pls give an Email", emailRef.current.value);
      return;
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      //     const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      // return gmailRegex.test(email);
      console.log("pls give proper gmail account");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("pls check your email");
        alert("pls check your email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-[93%]"
                  required
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="w-[5%] -ml-5"
                >
                  {/* Show */}
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover"
                  onClick={handleForgetPassword}
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            {loggedErr && <h2 className="text-red-700">{loggedErr}</h2>}
            {loggedSuccess && (
              <h1 className="text-green-600">{loggedSuccess}</h1>
            )}
          </div>
          <div>
            <p>
              if u have no account?Go to
              <Link className="btn" to="/registration">
                Registration
              </Link>
            </p>
          </div>
          <div className="flex">
            <p className="mx-5 my-3">Login with</p>
            <button className="btn btn-secondary" onClick={handleGoogleLogin}>
              Google
            </button>
          </div>
          {/* {user && (
            <>
              <p>{user.email}</p>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Login;
