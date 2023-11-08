import React from "react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MoreAboutusSection from "../components/MoreAboutusSection";
import MoreAboutButton from "../components/MoreAboutButton";
import ProductRange from "../components/ProductRange";
import LatestNews from "../components/LatestNews";
import OurPartners from "../components/OurPartners";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is a description of my page" />
      </Helmet>
      <TopNavbar />
      <Navbar path="/about-us" navTextOne="ABOUT US" pathProducts="/products-for-rent" navTexTwo="PRODUCTS" navTexThree="MEDIA CENTERE" pathContact="/contact-us" navTextFour="CONTACT US"/>
      <div className="header-container">
      <Header />
      </div>
      <div className="">
      <MoreAboutusSection />
      <MoreAboutButton />
      <ProductRange />
      <LatestNews />
      <OurPartners />
      <Footer />
      </div>
    </div>
  );
};

export default Home;
