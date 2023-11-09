import React from "react";
import "./ProductDetailsHeader.css";
import ProductDetailsCarousel from "./ProductDetailsCarousel";

const ProductDetailsHeader = () => {
  return (
    <div className="product-details-header-container">
      <div className="product-details-header-carousel">
        <ProductDetailsCarousel />
      </div>
      <div className="product-header-details">
        <h1>CAT 302.4D</h1>
        <p>
          Our excavators are engineered to take your job site to the next level.
          The newly improved load-sensing hydraulic flow system ensures quick
          cycle times, increase in lift capacity and high levels of precision.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsHeader;
