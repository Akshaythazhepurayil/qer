import React from "react";
import "./ProductRangeCard.css"
import blue_round_icon from "../assets/images/png/blue_round_icon.png"

const ProductRangeCard = ({image, title}) => {
  return (
    <div className="slide-items">
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="next-button">
        <img src={blue_round_icon} alt="" />
      </div>
      <div className="vehicle-name">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProductRangeCard;
