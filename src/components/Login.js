import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginForm.css"; // For custom styles, if needed
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-wrapper">
      <form>
        <h1 className="login-text">Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <NavLink to="/forgot-password">Forgot Password?</NavLink>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
