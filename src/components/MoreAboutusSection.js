import React from "react";
import "./MoreAboutusSection.css";
import more_about_img from "../assets/images/jpg/more_about_img.jpg"
import vertical_line from "../assets/images/png/vertical_line.png"

const MoreAboutusSection = () => {
  return (
    <div className="more-about-container">
      <div className="more-about-content">
        <h3>
          Provide highest quality equipment and solutions to our customers at
          lowest cost and deploying the best people to build a better future.
        </h3>
        <div className="more-about-img">
            <img className="" src={more_about_img} alt=""/>
        </div>
        <div className="counter-section">
            <div className="counter">
                <h2>500+</h2>
                <p>Successfully Delivered Projects</p>
            </div>
            <div className="experiens">
                <h2>16yrs</h2>
                <p>Total Experience</p>
            </div>
        </div>
      </div>
    <div className="about-us-side-line">
      <img src={vertical_line} alt="" />
    </div>
    </div>
  );
};

export default MoreAboutusSection;
