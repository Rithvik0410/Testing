import React from "react";
import "../styles.css"; // Ensure this path is correct
import "boxicons/css/boxicons.min.css";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
