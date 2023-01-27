import React from "react";
import "./Checkout.css";
import Header from "../Home/Header";
import { useStateValue } from "../../../Context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../../../utils/basket_total";
function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="checkout">
        <div className="checkout__container">
          <div className="checkout__cart">
            <div className="checkout__cart_heading">
              {basket.length !== 0 ? (
                <h1>Shopping Cart</h1>
              ) : (
                <h1> Your shopping cart is empty</h1>
              )}
            </div>
            <div className="checkout__cart_main">
              {basket.map((item, index) => {
                return (
                  <CheckoutProduct key={index} product={item}></CheckoutProduct>
                );
              })}
            </div>
            <div className="checkout__cart_subtotal">
              <p>Subtotal ({`${basket.length}`} items):</p>
              <div>
                <small>₹</small>
                <strong>
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                  }).format(getBasketTotal(basket))}
                </strong>
              </div>
            </div>
          </div>
          <div
            className="checkout__controls"
            style={
              basket.length !== 0
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }>
            <div className="checkout__cart_subtotal">
              <p>Subtotal ({`${basket.length}`} items):</p>
              <div>
                <small>₹</small>
                <strong>
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                  }).format(getBasketTotal(basket))}{" "}
                </strong>
              </div>
            </div>
            <div className="btn_container">
              <button onClick={handleCheckout}>Proceed to Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
