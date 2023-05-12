import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="mail">
      <h1>Save time, save money!</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <div className="mailContainer">
        <input type="email" placeholder="Your Email" />
        <button id="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default Register;
