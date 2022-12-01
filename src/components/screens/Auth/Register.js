import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../Redux/Actions/UserActions";
import { auth } from "../../../Utils/firebase";
import { GoogleButton } from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading } = userRegister;

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, confirm }, navigate));
  };

  // Firebase
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h3 className="text-center mt-3">CREATE ACCOUNT</h3>

      <div className="col-lg-8 offset-lg-2">
        <form className="shadow-lg rounded p-4 mt-4" onSubmit={handleSubmit}>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              name="name"
              // required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Enter Your Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <label htmlFor="email" className="form-label">
              Enter Your Email
            </label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              name="password"
              // required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="form-label">
              Enter Your Password
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirm"
              placeholder="Enter Your Password Again"
              name="confirm"
              // required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <label htmlFor="confirm" className="form-label">
              Enter Your Password Again
            </label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className={`btn ${loading ? "btn-secondary" : "btn-success"}`}
              disabled={loading}
            >
              {loading ? "LOADING . . ." : "SIGN IN"}
            </button>
            <div className="d-flex justify-content-center pt-4">
              <GoogleButton onClick={signInWithGoogle} />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <p className="mb-0 me-2 text-muted">I Have Account Login</p>
            <Link to="/login" className="btn btn-outline-primary btn-sm">
              LOGIN
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
