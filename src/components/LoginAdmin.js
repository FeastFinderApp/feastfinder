import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginAdmin.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginAdmin = () => {
  return (
    <div className="login-admin-wrapper">
      <form>
        <h1 className="login-admin-text">Admin Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Admin Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <button type="submit">Login</button>
        <div className="admin-register-link">
          <p>
            Not an admin? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginAdmin;
