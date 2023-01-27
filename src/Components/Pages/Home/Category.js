import React from "react";
import "./Category.css";

function Category({ category }) {
  return (
    <div className="category">
      <div className="category__header">
        <h2>{category.cat_title}</h2>
      </div>
      <div className="category__body">
        {category.info.map((info, index) => {
          return (
            <div key={index}>
              <img className="category_img" src={info.img} alt="" />
              <p>{info.name}</p>
            </div>
          );
        })}
      </div>
      <div className="category__footer">
        <p>see more</p>
      </div>
    </div>
  );
}

export default Category;
