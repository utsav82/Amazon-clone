import React from "react";
import "./Payment.css";
import { useState, useEffect } from "react";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { useStateValue } from "../../../Context/StateProvider.js";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import instance from "../../../utils/axios.js";
import axios from "axios";
import { db } from "../../../utils/firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { getBasketTotal } from "../../../utils/basket_total";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    console.log(user);
    const amt = getBasketTotal(basket) * 100;
    const getClientSecret = async () => {
      const URL = `http://localhost:5001/clone-8c06e/us-central1/api/payments/create?total=${amt}`;

      if (amt != 0) {
        const response = await axios({
          method: "POST",
          url: URL,
        });
        setClientSecret(response.data.clientSecret);
      }
    };
    getClientSecret();
  }, [basket]);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        //....
        console.log(user);
        const userRef = doc(collection(db, "users", user.uid, "orders"));
        await setDoc(userRef, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate('/orders', { replace: true });
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{basket.length} items</Link>}</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user && user.displayName}</p>
            <p>House no. 88, Omax city, block B, New Delhi, India</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket &&
              basket.map((item, index) => {
                return (
                  <CheckoutProduct product={item} key={index}></CheckoutProduct>
                );
              })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method </h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <div className="payment__priceContainer">
                <p>
                  Order Total{" "}
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    minimumFractionDigits: 2,
                    currency: "INR",
                  }).format(getBasketTotal(basket))}
                </p>
              </div>
              <div className="payment__btn_container">
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? <p>Now Processing</p> : <p>Buy Now</p>}
                  </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
