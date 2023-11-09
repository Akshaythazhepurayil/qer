import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar'
import ProductDetailsHeader from '../components/ProductDetailsHeader'
import "./ProductDetails.css"

const ProductDetails = () => {
  return (
    <div className=''>
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
      <div className='product-details-container'>
        <ProductDetailsHeader />
      </div>
    </div>
  )
}

export default ProductDetails