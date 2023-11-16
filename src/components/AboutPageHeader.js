import React from "react";
import "./AboutPageHeader.css";
import b_arrow from "../assets/images/png/b-arrow.png";

const AboutPageHeader = ({ headText, headerImage, subText }) => {
  return (
    <div className="about-header-container">
      <div className="about-head-section">
        <h1>{headText}</h1>
        <div className="home-path">
          <a className="/" href="/">
            Home
            <span>
              <img src={b_arrow} alt="" />
            </span>
          </a>
          <p>{subText}</p>
        </div>
      </div>
      <span className="about-bg-img">
        <img src={headerImage} alt="" />
      </span>
    </div>
  );
};

export default AboutPageHeader;
