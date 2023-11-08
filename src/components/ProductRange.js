import React from "react";
import "./ProductRange.css";
import ProductRangeCarousel from "./ProductRangeCarousel";
import BlackButton from "./BlackButton";
import CarouselButton from "./CarouselButton";
// import left_button from "../assets/images/png/left_button.png";
// import right_button from "../assets/images/png/right_button.png";

const ProductRange = () => {
  return (
    <div className="product-range-container">
      <div className="product-range">
        <h4>Product Range</h4>
        <div className="carousel-button">
          {/* <CarouselButton /> */}
          <div className="product-range-button">
          <button className="prev">&#8592;</button>
          <button className="next">&#8594;</button>
          </div>
        </div>
        <p className="sub-head">Find the right heavy equipment solutions</p>
        <div className="carousel">
          <ProductRangeCarousel />
        </div>
      </div>
      <div className="view-all-products">
        <BlackButton title="View All Products" />
      </div>
    </div>
  );
};

export default ProductRange;
