import React from "react";
import "./Footer.css";
import rightArrow from "../assets/images/png/right-arrow-white.png";
import face_book from "../assets/images/png/face_book.png";
import youtube_logo from "../assets/images/png/youtube_logo.png";
import linkedin_logo from "../assets/images/png/linkedin_logo.png";
import instagram_logo from "../assets/images/png/instagram_logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-sections">
        <div className="footer-section-one">
          <h5>Stay up to date on News!</h5>
          <div className="find">
            <input type="text" placeholder="Enter your email address" />
            <a href="/">
              <img src={rightArrow} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-section-one">
          <h4>Categories</h4>
          <div className="content">
            <p>Air Systems</p>
            <p>Earth Moving Equipments</p>
            <p>Lifting Equipments</p>
            <p>Power Systems</p>
          </div>
        </div>
        <div className="footer-section-one">
          <h4>Products</h4>
          <div className="content">
            <p>Access Platforms Comp</p>
            <p> Articulated Trucks </p>
            <p>Backhoe Loaders</p>
            <p>Cranes</p>
            <p>Compactors</p>
            <p>Diesel Generators</p>
            <p>Dozers</p>
            <p>Excavators</p>
            <p>Forks lifters/Loaders</p>
          </div>
        </div>
        <div className="footer-section-one">
          {/* <h5>Products</h5> */}
          <div className="content_section">
            <p>Low/High Pressure Air </p>
            <p>Compressors</p>
            <p>Mining Trucks</p>
            <p>Motor Graders</p>
            <p>Oil Free Air Compressors</p>
            <p>Road Pavers</p>
            <p>Skid Streers</p>
            <p>Synchronization Panels</p>
            <p>Wheel Loaders</p>
          </div>
        </div>
        <div className="footer-section-one">
          <h4>Quick Links</h4>
          <div className="quick-links">
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">News</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <p>© Copyright 2023 - Quality Equipment Rental All Rights Reserved</p>
        <div className="social-media-section">
          <a href="/">
            <span>
              <img src={face_book} alt="" />
            </span>
          </a>
          <a href="/">
            <span>
              <img src={youtube_logo} alt="" />
            </span>
          </a>
          <a href="/">
            <span>
              <img src={linkedin_logo} alt="" />
            </span>
          </a>
          <a href="/">
            <span>
              <img src={instagram_logo} alt="" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
