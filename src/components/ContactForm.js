import React from "react";
import white_arrow from "../assets/images/png/white_arrow.png"
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h4>
        Please fill up the below information for our team to get back to you.
      </h4>
      <form action="">
        <div className="form-content-section">
          <div className="form-details">
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="form-details">
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <label htmlFor="">Phone Number</label>
            <input type="tel" />
          </div>
        </div>
        <div className="company-section">
          <label htmlFor="">Company</label>
          <input type="text" />
        </div>
        <div className="comments-section">
          <label htmlFor="">Do you have any questions or comments?</label>
          <input type="text" />
        </div>
        <a className="submit-btn" href="/">SUBMIT<span>
          <img src={white_arrow} alt=""/>
          </span></a>
      </form>
    </div>
  );
};

export default ContactForm;
