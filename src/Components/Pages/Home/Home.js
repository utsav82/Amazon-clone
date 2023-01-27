import React from "react";
import "./Home.css";
import Header from "./Header";
import Banner from "./Banner";
import Products from "./Products";
import Category from "./Category";
import Footer from "./Footer";
import img_1 from "../../Assets/Banner Images/1.jpg";
import img_2 from "../../Assets/Banner Images/2.jpg";
import img_3 from "../../Assets/Banner Images/3.jpg";
import img_4 from "../../Assets/Banner Images/4.png";
import img_5 from "../../Assets/Banner Images/5.jpg";
import img_6 from "../../Assets/Banner Images/6.jpg";

import { product_list } from "../../../utils/product_data";
import { categories } from "../../../utils/category_data";
function Home() {
  const banner = [img_1, img_2, img_3, img_4, img_5, img_6];

  return (
    <div>
      <Header></Header>
      <div className="home">
        <div className="home-container">
          <Banner images={banner}></Banner>
          <div className="category-row">
            {categories.map((category) => {
              return (
                <Category
                  category={category}
                  key={category.cat_title}></Category>
              );
            })}
          </div>
          <div className="product-row">
            {product_list.slice(0, 3).map((item) => {
              return (
                <Products
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  specification={item.specification}
                  detail={item.detail}></Products>
              );
            })}
          </div>
          <div className="product-row">
            {product_list.slice(3, 6).map((item) => {
              return (
                <Products
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  specification={item.specification}
                  detail={item.detail}></Products>
              );
            })}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
