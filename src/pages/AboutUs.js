import React from 'react'
import "./AboutUs.css"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar'
import PageHeader from '../components/PageHeader'
import AboutInnerNav from '../components/AboutInnerNav'
import abot_bg_img from "../assets/images/png/abot_bg_img.png";

const AboutUs = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar path="/about-us" navTextOne="ABOUT US" pathProducts="/products-for-rent" navTexTwo="PRODUCTS" navTexThree="MEDIA CENTERE" pathContact="/contact-us" navTextFour="CONTACT US"/>
      <PageHeader headText="About" subText="About" headerImage={abot_bg_img}/>
      <AboutInnerNav />
      <div className="" style={{marginTop:"200px"}}>
      <Footer />
      </div>
    </div>
  )
}

export default AboutUs