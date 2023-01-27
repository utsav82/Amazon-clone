import React from "react";
import "./Footer.css";
import { useState, useEffect } from "react";
import logo from "../../Assets/amazon-logo.png";
function Footer() {
  const [isVisible, set_isVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      set_isVisible(true);
    } else {
      set_isVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer_btn_container">
        {isVisible && (
          <button onClick={scrollToTop} className="footer_btn">
            Back to top
          </button>
        )}
      </div>
      <div className="footer__info">
        <div className="footer__logo">
          <img src={logo} alt="amazon-logo" />
        </div>
        <div>
          <p>English</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
