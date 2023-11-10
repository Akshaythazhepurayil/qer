import React from "react";
import left_button from "../assets/images/png/left_button.png";
import right_button from "../assets/images/png/right_button.png";
import "./RelatedSection.css";
import RelatedSectionCarousel from "./RelatedSectionCarousel";

const RelatedSection = () => {
  return (
    <div className="related-section-container">
      <div className="related-section-head">
        <h2>Related Accessories</h2>
        <div className="related-button">
          <img className="related-prev" src={left_button} alt="" />
          <img className="related-next" src={right_button} alt="" />
        </div>
      </div>
      <div className="related-carousel-section">
        <RelatedSectionCarousel />
      </div>
    </div>
  );
};

export default RelatedSection;
