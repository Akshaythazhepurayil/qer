import React from "react";
import downArrow from "../assets/images/png/downArrow.png";
import cart_icon from "../assets/images/png/cart_icon.png";
import whatsapp_icon from "../assets/images/png/whatsapp_icon.png";
import "./TopNavbar.css"

const TopNavbar = () => {
  return (
    <div className="top-nav-container">
      <a href="/" className="">
        CallUs: <span className="">+97148032100</span>
      </a>
      <div className="top-nav-right-side">
        <div className="language-field">
          <p className="">English</p>
          <span className="">
            <img src={downArrow} alt="" />
          </span>
        </div>
        <div className="cart-icon">
          <img src={cart_icon} alt="" />
        </div>
        <div className="watsap-icon">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
