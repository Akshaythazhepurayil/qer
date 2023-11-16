import React from "react";
import "./ProductRangeCard.css"
import blue_round_icon from "../assets/images/png/blue_round_icon.png"

const ProductRangeCard = ({path, image, title}) => {
  return (
    <div className="slide-items">
      <a href={path} className="product-img">
        <img src={image} alt="" />
      </a>
      <a href={path} className="next-button">
        <img src={blue_round_icon} alt="" />
      </a>
      <a href={path} className="vehicle-name">
        <span>{title}</span>
      </a>
    </div>
  );
};

export default ProductRangeCard;
