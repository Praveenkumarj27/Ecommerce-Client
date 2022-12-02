import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../Redux/Actions/UserActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading } = userLogin;

 

  // Form Submission
  const handleSubmit = (e) => {
    // localStorage.setItem("role",role);
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };



  return (
    <>
      <div className="container col-sm-12 col-md-12 col-lg-4 p-0 form">
        <div className="heading">
          <h1 className="login">Login</h1>
        </div>

        <div className="container form-body pb-4 ps-4 pe-4">
          <form onSubmit={handleSubmit}>
            <div class="mb-1 mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              <Link to="/register">SIGN UP</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
