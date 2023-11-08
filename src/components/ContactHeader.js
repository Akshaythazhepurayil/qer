import React from "react";
import contacut_us_bg from "../assets/images/png/blue_location_icon.png";
import "./ContactHeader.css";

const ContactHeader = () => {
  return (
    <div>
      <div className="contact-header-bg">
        <div className="location-top">
          <img src={contacut_us_bg} alt="" />
        </div>
        <div className="location-bottom">
          <img src={contacut_us_bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
