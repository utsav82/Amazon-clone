import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { product_list } from "../../../utils/product_data";
import { addToBasket } from "../../../actions/Basket";
import { useStateValue } from "../../../Context/StateProvider";
import Header from "../Home/Header";
import img_1 from "../../Assets/Product Page Images/1.png";
import img_2 from "../../Assets/Product Page Images/2.png";
import img_3 from "../../Assets/Product Page Images/3.png";
import img_4 from "../../Assets/Product Page Images/4.png";
const icon_farm = [
  { img: img_1, p: "Cash on delivery" },
  { img: img_2, p: "7 Days replacement" },
  { img: img_3, p: "Amazon Delivered" },
  { img: img_4, p: "3 Year warranty" },
];

const RatingStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className="rating-star">
    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
  </svg>
);

function Product() {
  let { id } = useParams();
  let product = product_list.find((item) => item.id === id);
  const [{}, dispatch] = useStateValue();
  const handleAddToBasket = () => {
    const item = {
      id: product.id,
      title: product.title,
      detail: product.detail,
      image: product.image,
      price: product.price,
      rating: product.rating,
      specification: product.specification,
    };
    addToBasket(item, dispatch);
  };
  return (
    <div>
      <Header></Header>
      <div className="product__container">
        <div>
          <div className="product_">
            <div className="product__image_">
              <img src={product.image} alt="product_image_" />
            </div>
            <div className="product__info_">
              <div className="product__title_rating">
                <h1>
                  <span>{product.title}</span>
                </h1>
                <div className="product__rating">
                  {Array(product.rating)
                    .fill()
                    .map((_, index) => (
                      <p key={index}>{RatingStar}</p>
                    ))}
                </div>
              </div>
              <div className="product__details">
                <div className="product__price__info">
                  <span>
                    <small>₹</small>
                    <strong>{product.price}</strong>
                    <small>00</small>
                  </span>
                  <p>Inclusive of all taxes</p>
                </div>
                <div className="product__icon_farm">
                  {icon_farm.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item.img} alt="icon" />
                        <p>{item.p}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="product__specifications">
                  {product.specification.map((item, index) => {
                    return (
                      <div key={index} style={{ display: "flex", gap: "5px" }}>
                        <strong>{item.split(":")[0]}:</strong>
                        <p>{item.split(":")[1]}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="product__about">
                  <h1>About this item</h1>
                  <p>{product.detail}</p>
                </div>
              </div>
            </div>
            <div className="product__controls">
              <span>
                <small>₹</small>
                <strong>{product.price}</strong>
                <small>00</small>
              </span>
              <div className="btn__addtocart_container">
                <button className="btn__addtocart" onClick={handleAddToBasket}>
                  Add to Cart
                </button>
              </div>
              <div className="btn__buynow_container">
                <button className="btn__buynow">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
