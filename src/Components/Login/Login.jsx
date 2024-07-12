import React, { useState } from "react";
import auth from "../../Firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    console.log("google mama is coming");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const loggedInUser = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(result.user);
        setUser(loggedInUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };
  const handleLogout = () => {
    console.log("logout is working");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
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
          {user && (
            <>
              <p>{user.email}</p>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
