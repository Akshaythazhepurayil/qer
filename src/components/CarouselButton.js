import React from "react";
import left_button from "../assets/images/png/left_button.png";
import right_button from "../assets/images/png/right_button.png";
import "./CarouselButton.css";

const CarouselButton = () => {
  return (
    <div className="product-rabge-button">
      <img className="prev" src={left_button} alt="" />
      <img className="next" src={right_button} alt="" />
    </div>
  );
};

export default CarouselButton;
