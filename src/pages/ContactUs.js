import React from "react";
import "./ContactUs.css";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHeader from "../components/ContactHeader";
import ContactformSection from "../components/ContactformSection";

const ContactUs = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar
        path="/about-us"
        navTextOne="ABOUT US"
        pathProducts="/products-for-rent"
        navTexTwo="PRODUCTS"
        navTexThree="MEDIA CENTERE"
        pathContact="/contact-us"
        navTextFour="CONTACT US"
      />
      <ContactHeader />
      <ContactformSection /> 
      <div className="contactus-footer">
      <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
