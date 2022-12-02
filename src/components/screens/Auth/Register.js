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
  const [role, setRole] = useState("");

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
        // localStorage.setItem("role",role);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container col-sm-12 col-md-12 col-lg-4 p-0 form">
        <div className="heading">
          <h1 className="signup">Sign Up</h1>
        </div>

        <div className="container form-body pb-4 ps-4 pe-4">
          <form onSubmit={handleSubmit}>
            <div class="mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Admin"
                onChange={(e) => setRole(e.target.value)}
              />
              <label class="form-check-label" for="inlineRadio1">
                Admin
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="User"
                onChange={(e) => setRole(e.target.value)}
              />
              <label class="form-check-label" for="inlineRadio2">
               User
              </label>
            </div> */}
            <div class="mb-3 mt-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                className="form-control"
                id="confirm"
                placeholder="Enter Your Password Again"
                name="confirm"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className={`btn ${loading ? "btn-secondary" : "btn-success"}`}
                disabled={loading}
              >
                {loading ? "LOADING . . ." : "SIGN IN"}
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-center mt-4">
              <p className="mb-0 me-2 text-muted">I Have Account Login</p>
              <Link to="/login">LOGIN</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
