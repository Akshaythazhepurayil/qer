import React from "react";
import blue_round_icon from "../assets/images/png/blue_round_icon.png";
import "./ProductsListCard.css";

const ProductsListCard = ({ image, title, path }) => {
  return (
    <div className="card-container">
      <div className="card-section">
        <a href={path} className="card-img">
          <img src={image} alt="" />
        </a>
        <a href={path} className="card-next-button">
          <img src={blue_round_icon} alt="" />
        </a>
      </div>
      <div className="card-title">
        <a href={path}>{title}</a>
      </div>
    </div>
  );
};

export default ProductsListCard;
