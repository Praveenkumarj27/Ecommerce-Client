import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../Redux/Actions/UserActions";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const role= localStorage.getItem("role");
  console.log(role);

  document.onclick = function (e) {
    if (e.target.id !== "toggle" && e.target.id !== "navbar") {
      setToggle(false);
    }
  };

  const LOGOUT = () => {
    dispatch(logout());
  };

  const renderNav = () => {
    if (userInfo && userInfo.msg) {
      return [
        <>
       
       {role === "admin"?( 
          <li>
            <Link to="/add">Add Products</Link>
          </li>
       ):null}
          <li>
            <Link to="/card">Basket</Link>
          </li>
          <li>
            <Link to="/orders">Order</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login" onClick={LOGOUT}>
              LOGOUT
            </Link>
          </li>
        </>,
      ];
    } else {
      return [
        <>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/register">SIGN UP</Link>
          </li>
        </>,
      ];
    }
  };
  return (
    <>
      <header id="header">
        <Link to="/" className="logo">
          IPHONE SHOP
        </Link>
        <div
          onClick={() => setToggle(!toggle)}
          className={toggle ? "actives" : ""}
          id="toggle"
        ></div>
        <div className={toggle ? "actives" : ""} id="navbar">
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            {renderNav()}
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
