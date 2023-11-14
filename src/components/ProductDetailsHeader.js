import React, { useState } from "react";
import "./ProductDetailsHeader.css";
import ProductType from "./ProductType";
import rectangle from "../assets/images/png/rectangle.png";
import red_arrow from "../assets/images/png/red_arrow.png";
import black_arrow from "../assets/images/png/black_arrow.png";
import dozers_mini_img from "../assets/images/png/dozers_mini_img.png";
import wheel_loaders_mini from "../assets/images/png/wheel_loaders_mini.png";
import road_pavers_mini from "../assets/images/png/road_pavers_mini.png";
import compactor_mini from "../assets/images/png/compactor_mini.png";
import ProductDetailsCarousel from "./ProductDetailsCarousel";

const ProductDetailsHeader = () => {
  const [activeSection, setActiveSection] = useState("img-two");
  const [count, setCount] = useState(0);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="product-details-header-container">
        <div className="product-carousel-container">
          <div className="product-details-header-carousel">
            <ProductDetailsCarousel id="id" />
          </div>
          <div className="product-detail-navigation">
            <div
              className={`product-detail-nav ${
                activeSection === "img-one" ? "nav-active" : ""
              }`}
              id="img-one"
              onClick={() => handleSectionClick("img-one")}
            >
              <img className="" src={dozers_mini_img} alt="" />
            </div>
            <div
              className={`product-detail-nav ${
                activeSection === "img-two" ? "nav-active" : ""
              }`}
              id="img-two"
              onClick={() => handleSectionClick("img-two")}
            >
              <img className="" src={wheel_loaders_mini} alt="" />
            </div>
            <div
              className={`product-detail-nav ${
                activeSection === "img-three" ? "nav-active" : ""
              }`}
              id="img-three"
              onClick={() => handleSectionClick("img-three")}
            >
              <img className="" src={road_pavers_mini} alt="" />
            </div>
            <div
              className={`product-detail-nav ${
                activeSection === "img-four" ? "nav-active" : ""
              }`}
              id="img-four"
              onClick={() => handleSectionClick("img-four")}
            >
              <img className="" src={compactor_mini} alt="" />
            </div>
          </div>
        </div>
        <div className="product-header-details">
          <h1>CAT 302.4D</h1>
          <p>
            Our excavators are engineered to take your job site to the next
            level. The newly improved load-sensing hydraulic flow system ensures
            quick cycle times, increase in lift capacity and high levels of
            precision.
          </p>
          <div className="product-type-section">
            <ProductType head="TYPE" subHead="Mini" />
            <ProductType head="OPERATING WT" subHead="2.5TONS" />
            <ProductType head="BUCBUCKET CAPACITY" subHead="0.41m³" />
          </div>
          <div className="pricing-section">
            <h6>Pricing</h6>
            <div className="radio-section">
              <input type="radio" name="Daily" id="daily" />
              <label for="daily">Daily</label>
            </div>
            <div className="radio-section">
              <input type="radio" name="Weekly" id="weekly" />
              <label for="weekly">Weekly</label>
            </div>
            <div className="radio-section">
              <input type="radio" name="Monthly" id="monthly" />
              <label for="monthly">Monthly</label>
            </div>
          </div>
          <div className="date-section">
            <h6>Set location to see rates</h6>
            <div className="set-date">
              <div className="date">
                <label htmlFor="">Start Date</label>
                <input type="date" value="" placeholder="select" />
                <span>
                  <img src={rectangle} alt="" />
                </span>
              </div>
              <div className="date">
                <label htmlFor="">Start Date</label>
                <input type="date" placeholder="select" />
                <span>
                  <img src={rectangle} alt="" />
                </span>
              </div>
              {/* <div className="date">
                <label htmlFor="">Start Date</label>
                <ReactDatePicker
                  placeholderText="Select"
                  customInput={<CustomInputWithIcon />}
                />
              </div> */}
            </div>
          </div>
          <div className="quantity-section">
            <h6>Quantity</h6>
            <button onClick={decrement} className="decrease">
              -
            </button>
            <p>{count}</p>
            <button onClick={increment} className="increment">
              +
            </button>
          </div>
          <div className="button-section">
            <a className="add-to-cart" href="/">
              ADD TO CART
              <span>
                <img src={black_arrow} alt="" />
              </span>
            </a>
            <a className="download-catalogue" href="/">
              DOWNLOAD CATLOGUE FOR THIS MODEL
              <span>
                <img src={red_arrow} alt="" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsHeader;
