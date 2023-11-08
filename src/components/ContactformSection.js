import React from "react";
import "./ContactformSection.css";
import location_icon from "../assets/images/png/location_icon.png";
import phone_icon from "../assets/images/png/phone_icon.png";
import ContactForm from "./ContactForm";

const ContactformSection = () => {
  return (
    <div className="contact-container">
      <div className="head-section">
        <h1>Get in Touch with us</h1>
        <p>
          Got a question or need some help? Get in touch. We'd love to hear from
          you.
        </p>
      </div>
      <div className="form-section">
        <div className="form-section-left">
          <h4 className="address-section">Our Offices</h4>
          <h4 className="du-office-address">DUBAI OFFICE</h4>
          <div className="address-details">
            <span>
              <img src={location_icon} alt="" />
            </span>
            <div>
              <p>P.O. Box: 99068, </p>
              <p>Building No. 24 Street# S800,</p>
              <p>Jafza South Zone, Jebel Ali, </p>
              <p>Dubai, UAE</p>
            </div>
          </div>
          <div className="contact-details">
            <span>
              <img src={phone_icon} alt="" />
            </span>
            <div>
              <p>+971 4 803 2100 </p>
              <p>+971 4 803 2199 (Fax)</p>
            </div>
          </div>
          <div className="contact-mail-details">
            <span>
              <img src={location_icon} alt="contact-details" />
            </span>
            <p>info@qer.ae</p>
          </div>
          <div className="abu-office-address">
            <p>ABU DHABI OFFICE</p>
            <p>+</p>
          </div>
          <div className="ksa-office-address">
            <p>KSA OFFICE</p>
            <p>+</p>
          </div>
        </div>
        <div className="form-section-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactformSection;
