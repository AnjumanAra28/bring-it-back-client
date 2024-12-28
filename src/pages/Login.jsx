import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, setUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    

    loginUser(email, password)
      .then((result) => {
        setError("");
        setUser(result.user);
        Swal.fire({
          title: "Success!",
          text: "Logged In Successfully",
          icon: "success",
          confirmButtonText: "Close",
        }); 
        
        form.reset();
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/invalid-credential")
          setError("Invalid Credential");
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm lg:max-w-lg shrink-0 shadow-2xl mb-16">
      <h1 className="text-4xl font-bold my-3 text-center pt-3">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
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
            name="password"
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
        {error && <p className="text-red-500 text-sm my-2">{error}</p>}

        <div className="flex gap-5 items-center">
          <div className="form-control mt-2">
            <button className="btn bg-cyan-600 text-white">Login</button>
          </div>
          <div className="form-control mt-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-cyan-600 text-white"
            >
              Login With Google
            </button>
          </div>
        </div>

        <p className="text-xs">
          Don't have an account? Please <Link to="/register">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
