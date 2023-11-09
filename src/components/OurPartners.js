import React from "react";
import "./OurPartners.css";

import downArrow from "../assets/images/png/downArrow.png";
import right_blue_arrow from "../assets/images/png/right_blue_arrow.png";
import left_blue_arrow from "../assets/images/png/left_blue_arrow.png";
import PartnersCarousel from "./PartnersCarousel";

const OurPartners = () => {
  return (
    <div className="partners-container">
      <div className="partners-head">
        <h2>Our Partners</h2>
        <div className="partners-button">
          <a href="/">
            VIEW ALL PARTNERS
            <span>
              <img src={downArrow} alt="" />
            </span>
          </a>
          <div className="carousel-btn">
            <button className="btn-left">
              <img src={left_blue_arrow} alt="" />
            </button>
            <button className="btn-right">
              <img src={right_blue_arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="brand-logo-cards">
        <PartnersCarousel />
      </div>
    </div>
  );
};

export default OurPartners;
