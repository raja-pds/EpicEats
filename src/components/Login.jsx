// src/components/LoginSignup.js
import React, { useState } from "react";
import "../styles/login.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="login-form">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="loginEmail">Email:</label>
              <input type="email" id="loginEmail" required />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" required />
            </div>
            <button type="submit" className="btn">Login</button>
            <p className="toggle-text">
              Don't have an account? <span onClick={toggleForm}>Sign up</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} className="signup-form">
            <h2>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="signupEmail">Email:</label>
              <input type="email" id="signupEmail" required />
            </div>
            <div className="form-group">
              <label htmlFor="signupPassword">Password:</label>
              <input type="password" id="signupPassword" required />
            </div>
            <div className="form-group">
              <label htmlFor="signupConfirmPassword">Confirm Password:</label>
              <input type="password" id="signupConfirmPassword" required />
            </div>
            <button type="submit" className="btn">Sign Up</button>
            <p className="toggle-text">
              Already have an account? <span onClick={toggleForm}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
