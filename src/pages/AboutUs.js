import React from "react";
import "./AboutUs.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import AboutPageHeader from "../components/AboutPageHeader";
import AboutInnerNav from "../components/AboutInnerNav";
import abot_bg_img from "../assets/images/png/abot_bg_img.png";

const AboutUs = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar
        path="/"
        navTextOne="HOME"
        pathProducts="/products-for-rent"
        navTexTwo="PRODUCTS"
        navTexThree="MEDIA CENTERE"
        pathContact="/contact-us"
        navTextFour="CONTACT US"
      />
      <AboutPageHeader headText="About" subText="About" headerImage={abot_bg_img} />
      <div className="about-content">
        <AboutInnerNav />
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
