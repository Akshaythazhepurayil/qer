import React from "react";
import "./PageHeader.css";
import b_arrow from "../assets/images/png/b-arrow.png";

const PageHeader = ({ headText, headerImage, subText }) => {
  return (
    <div className="page-header-container">
      <div className="page-head-section">
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
      <span className="bg-img">
        <img src={headerImage} alt="" />
      </span>
    </div>
  );
};

export default PageHeader;
