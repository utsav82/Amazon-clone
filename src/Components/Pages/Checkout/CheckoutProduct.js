import React from "react";
import { useStateValue } from "../../../Context/StateProvider";
import { removeFromBasket } from "../../../actions/Basket";
function CheckoutProduct({ product }) {
  const [{}, dispatch] = useStateValue();
  const handleDelete = () => {
    removeFromBasket(product, dispatch);
  };
  return (
    <div className="checkout__list">
      <div className="checkout__left">
        <div className="checkout__product__image">
          <img src={product.image} alt="" />
        </div>
        <div className="checkout__product__details">
          <h1>{product.title}</h1>
          <div className="checkout__controls_">
            <button onClick={handleDelete}>Remove from Basket</button>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <div>
          <small>₹</small>
          <strong>
            {`${(Math.round(product.price * 100) / 100).toFixed(2)}`}{" "}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
