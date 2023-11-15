import React from "react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsListing from "../components/ProductsListing";
import PowerSystems from "../components/PowerSystems";
import "./ProductsForRent.css";
import PageHeader from "../components/PageHeader";
import AirSystems from "../components/AirSystems";
import LiftingEquipments from "../components/LiftingEquipments";
import dozer_banner_img from "../assets/images/png/dozer_banner_img.png";

const ProductsForRent = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar
        path="/"
        navTextOne="HOME"
        pathProducts="/about-us"
        navTexTwo="ABOUT US"
        navTexThree="MEDIA CENTERE"
        pathContact="/contact-us"
        navTextFour="CONTACT US"
      />
      <PageHeader
        headText="Products for Rent"
        subText="Products for Rent"
        headerImage={dozer_banner_img}
      />
      <div className="earth-moving-equipments">
        <ProductsListing headText="Earth Moving Equipments" />
      </div>
      <div className="power-systems-section">
        <PowerSystems headText="Power Systems" />
      </div>
      <div className="air-systems-section">
        <AirSystems headText="Air Systems" />
      </div>
      <div className="lifting-equipments-section">
        <LiftingEquipments headText="Lifting Equipments" />
      </div>
      <div className="productc-for-rent-footer">
        <Footer />
      </div>
    </div>
  );
};

export default ProductsForRent;
