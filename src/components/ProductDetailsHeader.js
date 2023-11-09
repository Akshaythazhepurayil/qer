import React from "react";
import "./ProductDetailsHeader.css";
import ProductType from "./ProductType";
// import ProductDetailsCarousel from "./ProductDetailsCarousel";

const ProductDetailsHeader = () => {
  return (
    <div className="product-details-header-container">
      <div className="product-details-header-carousel">
        {/* <ProductDetailsCarousel /> */}
      </div>
      <div className="product-header-details">
        <h1>CAT 302.4D</h1>
        <p>
          Our excavators are engineered to take your job site to the next level.
          The newly improved load-sensing hydraulic flow system ensures quick
          cycle times, increase in lift capacity and high levels of precision.
        </p>
        <div className="product-type-section">
          <ProductType head="TYPE" subHead="Mini" />
          <ProductType head="OPERATING WT" subHead="2.5TONS" />
          <ProductType head="BUCBUCKET CAPACITY" subHead="0.41m³" />
        </div>
        <div className="pricing-section">
          <h6>Pricing</h6>
          <div className="radio-section">
            <input type="radio" name="" id="" />
            <p>Daily</p>
          </div>
          <div className="radio-section">
            <input type="radio" name="" id="" />
            <p>Weekly</p>
          </div>
          <div className="radio-section">
            <input type="radio" name="" id="" />
            <p>Monthly</p>
          </div>
        </div>
        <div className="date-section">
          <h6>Set location to see rates</h6>
          <div className="set-date">
          <div className="date">
            <label htmlFor="">Start Date</label>
            <input type="date" />
          </div>
          <div className="date">
            <label htmlFor="">Start Date</label>
            <input type="date" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHeader;
