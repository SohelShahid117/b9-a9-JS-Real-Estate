import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const { createUser } = useContext(authContext);
  console.log(createUser);
  const [registerErr, setRegisterErr] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("handleRegister is active");
    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    const checked = e.target.terms.checked;
    console.log(checked);
    if (password.length < 6) {
      return setRegisterErr("password should be >=6 character");
    } else if (!/[A-Z][a-z]/.test(password)) {
      return setRegisterErr(
        "at least one uppercase and one lower case character"
      );
    } else if (!checked) {
      return setRegisterErr("accept our terms & conditions");
    }
    setRegisterErr("");
    setSuccess("");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("registration success.");
      })
      .catch((err) => {
        console.log(err);
        setRegisterErr(err.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                namer="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                name="photo"
                className="input input-bordered"
                // required
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="terms" id="" />
              <label htmlFor="terms">Accept our terms & conditions</label>{" "}
              <br />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div>
            <p className="mx-2">
              Already have an account?Go to
              <Link to="/login" className="btn btn-primary ml-2">
                Login
              </Link>{" "}
            </p>
          </div>
          {registerErr && <h2 className="text-red-700">{registerErr}</h2>}
          {success && <h1 className="text-green-600">{success}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Registration;
