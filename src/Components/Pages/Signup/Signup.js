import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Signup.css";

import { registerIntiate } from "../../../actions/Auth";
import { useStateValue } from "../../../Context/StateProvider";
import amazon_logo_small from "../../Assets/amazon-logo-small.png";

const triangle = (
  <svg
    className="triangle"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
    />
  </svg>
);

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{}, dispatch] = useStateValue();

  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    registerIntiate(name, email, password, dispatch, navigate);
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <div className="signup">
      <Link to="/" className="signup__logo">
        <img
          src={amazon_logo_small}
          alt="amazon-logo"
          className="amazon-logo"
        />
      </Link>
      <div className="signup__container">
        <h1>Create Account</h1>
        <form>
          <label htmlFor="name">
            <h4>Your name</h4>
            <input
              value={name}
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <h4>Password</h4>
            <input
              value={password}
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </form>
        <section>
          <div className="btn__container">
            <button onClick={signup}>Sign Up</button>
          </div>
          <div className="signup__legal">
            <div>
              By continuing, you agree to Amazon's{" "}
              <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">
                Conditions of Use
              </a>{" "}
              and{" "}
              <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">
                Privacy Notice
              </a>
              .
            </div>
          </div>
        </section>
        <section>
          <div>
            <span className="login__link">
              Already have an account?{" "}
              <span>
                <Link to="/login">Log In {triangle}</Link>
              </span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
