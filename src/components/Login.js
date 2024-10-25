import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import "./LoginForm.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      if (response.status === 200) {
        // Redirect to /profile on success
        alert("Successfully Logged in!");
        navigate("/profile");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleLogin}>
        <h1 className="login-text">Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
