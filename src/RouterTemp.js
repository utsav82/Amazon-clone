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

export default function RouterTemp() {
  const Promise = loadStripe(
    "pk_test_51LdwHfSISE5qAaaj64EJPyTGYyC7lGtp3ZLG6S9qwpJdi5kM7UoO6lRuwEcteHU4SwruqAOZDkgkb3uLLXw4IjOm00Ew1cgsDu"
  );
  const appearance = {
    theme: "stripe",
  };

  const options = {
    appearance,
  };
  return (
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
        }></Route>
    </Routes>
  );
}
