import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../Redux/Actions/UserActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading } = userLogin;

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };

  return (
    <>
      <h3 className="text-center mt-4">LOGIN NOTEBOOK STORE</h3>

      <div className="col-lg-8 offset-lg-2">
        <form className="shadow-lg rounded p-4 mt-4" onSubmit={handleSubmit}>
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Enter Your Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="form-label">
              Enter Your Password
            </label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className={`btn ${loading ? "btn-secondary" : "btn-success"}`}
              disabled={loading}
            >
              {loading ? "LOADING . . ." : "LOGIN"}
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <p className="mb-0 me-2 text-muted">Don't have an account?</p>
            <Link to="/register" className="btn btn-outline-primary btn-sm">
              SIGN UP
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
