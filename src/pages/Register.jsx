import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    //  password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    if (password.length < 6) {
      setError("Password must be 6 characters long.");
      return;
    }
    if (!hasUpperCase) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!hasLowerCase) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setError("");
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo });
        form.reset();
        console.log(result);
        const newUser = { name, email, photo };

        fetch("https://bring-it-back-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User Added Successfully",
                icon: "success",
                confirmButtonText: "Close",
              });
            }
            navigate("/");
          });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          setError(
            "This email is already registered. Please use a different email."
          );
        }
        form.reset();
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm lg:max-w-lg shrink-0 shadow-2xl mb-16">
      <h1 className="text-4xl font-bold pt-3 my-3 text-center">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Photo Url"
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
        </div>
        {error && <p className="text-red-500 text-sm my-2">{error}</p>}
        <div className="form-control mt-4">
          <button className="btn bg-cyan-600 text-white">SignUp</button>
        </div>
        <p className="text-xs">
          Already have an account? Please <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
