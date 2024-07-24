import React from "react";
import "../styles.css";
import "boxicons/css/boxicons.min.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/admin.html"; // Change 'homepage.html' to the actual homepage URL
  };

  return (
    <div className="wrapper">
      <form id="loginForm" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="dummy.com">Forgot Password</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="/register1">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
