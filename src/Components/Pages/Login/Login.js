import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import amazon_logo_small from "../../Assets/amazon-logo-small.png";
import { loginInitiate } from "../../../actions/Auth";
import { useStateValue } from "../../../Context/StateProvider";
function Login() {
  const [input, setInput] = useState("Email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  const toggleInput = () => {
    if (input === "Email") {
      setInput("Password");
    } else {
      setInput("Email");
    }
  };
  const logIn = (e) => {
    e.preventDefault();
    loginInitiate(email, password, dispatch, navigate);
  };
  return (
    <div className="login">
      <Link to="/" className="login__logo">
        <img
          src={amazon_logo_small}
          alt="amazon-logo"
          className="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <div>
          {input === "Email" ? (
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
          ) : (
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
          )}
        </div>
        <section>
          <div className="btn__container">
            {input === "Email" ? (
              <button onClick={toggleInput}>Continue</button>
            ) : (
              <button onClick={logIn}>Sign In</button>
            )}
          </div>
          <div className="login__legal">
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
      </div>
      <div className="sign_up">
        <h5>New to amazon?</h5>
        <div className="btn__container_">
          <Link to="/signup">
            <button>Create your Amazon account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
