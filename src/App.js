import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { useStateValue } from "./Context/StateProvider.js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Product from "./Components/Pages/Product/Product";
import Signup from "./Components/Pages/Signup/Signup";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Orders from "./Components/Pages/Orders/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Components/Pages/Payment/Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);

  useEffect(() => {
    let basket = window.localStorage.getItem("basket");
    if (basket === null) {
      basket = [];
    } else {
      basket = JSON.parse(basket);
    }
    dispatch({
      type: "SET_BASKET",
      payload: basket,
    });
  }, [dispatch]);
  
  const Promise = loadStripe(
    "pk_test_51Mmea2SHeAg5kRjVZP8qhZUfy4JtkpPZVmcPi6CWAyyDtkqhS5URat7dUaE3NLtLpTCShVKNRuNE9xUcpIXAqwdI00IitNe6ui"
  );
  const appearance = {
    theme: "stripe",
  };

  const options = {
    appearance,
  };
  
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/product/:id" element={<Product></Product>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/orders" element={<Orders></Orders>}></Route>

            <Route
              path="/payment"
              element={
                <Elements options={options} stripe={Promise}>
                  <Payment></Payment>
                </Elements>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
