import React from 'react'
import left_button from "../assets/images/png/left_button.png";
import right_button from "../assets/images/png/right_button.png";
import "./RelatedProducts.css"
import RelatedProductsCarousel from './RelatedProductsCarousel';

const RelatedProducts = () => {
  return (
    <div className="related-products-container">
      <div className="related-products-head">
        <h2>Related Products</h2>
        <div className="related-products-button">
          <img className="related-products-prev" src={left_button} alt="" />
          <img className="related-products-next" src={right_button} alt="" />
        </div>
      </div>
      <div className="related-products-carousel">
        <RelatedProductsCarousel />
      </div>
    </div>
  )
}

export default RelatedProducts