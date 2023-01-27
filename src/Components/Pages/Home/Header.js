import React from "react";
import amazon from "../../Assets/amazon-logo.png";
import { Link } from "react-router-dom";
import download_app from "../../Assets/Download_app.jpg";
import { useStateValue } from "../../../Context/StateProvider.js";
import { logoutInitiate } from "../../../actions/Auth";
import "./Header.css";

const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="header_search_icon">
    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
  </svg>
);
const ShoppingCart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className="shopping-cart">
    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
  </svg>
);
const LocationDot = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className="location-dot">
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
  </svg>
);
const ListIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="list-icon">
    <path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z" />
  </svg>
);
const header_items = [
  "All",
  "Best Sellers",
  "Today's Deals",
  "Mobiles",
  "Customer Service",
  "Books",
];
function Header() {
  const [{ user, basket }, dispatch] = useStateValue();
  const logout = () => {
    logoutInitiate(dispatch);
  };
  return (
    <div className="head">
      <nav className="header">
        <div className="header__left">
          <Link to="/" className="nav-item nav-logo">
            <img
              src={amazon}
              alt="amazon logo"
              srcSet=""
              className="header__logo"
            />
          </Link>
          <div className="header__location">
            {LocationDot}
            <div>
              <span className="header_option_1">Hello</span>
              <span className="header_option_2">Select your address</span>
            </div>
          </div>
        </div>
        <div className="header__mid">
          <div className="header__search">
            <form className="header__search">
              <input type="text" className="header_search_inp" />
              <button type="submit" className="header_search_btn">
                {SearchIcon}
              </button>
            </form>
          </div>
        </div>
        <div className="header__right">
          <div className="header__nav">
            <div className="header__option">
              {user !== null ? (
                <span className="header_option_1">
                  Hello {`${user.displayName}`}
                </span>
              ) : (
                <span className="header_option_1">Hello Guest</span>
              )}
              {user !== null ? (
                <span className="header_option_2">
                  <button onClick={logout}>Sign out</button>
                </span>
              ) : (
                <Link to="/login" className="header__link">
                  <span className="header_option_2">Sign In</span>
                </Link>
              )}
            </div>
            <Link to="/" className="header__link">
              <div className="header__option">
                <span className="header_option_1">Returns</span>
                <span className="header_option_2">& Orders</span>
              </div>
            </Link>
            {/*CART*/}
            <Link to="/checkout" className="header__link">
              <div className="header_option_cart">
                {ShoppingCart}
                <span className="header_option_2 header_count">
                  {basket ? basket.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="item-container">
        <div>
          {ListIcon}
          {header_items &&
            header_items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        <div>
          <img src={download_app} alt="download app now" />
        </div>
      </div>
    </div>
  );
}

export default Header;
