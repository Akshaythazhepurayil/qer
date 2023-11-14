import React from 'react'
import blue_round_icon from "../assets/images/png/blue_round_icon.png";
import "./RelatedProductCard.css"

const RelatedProductCard = ({ image, title, path }) => {
  return (
    <div className="related-product-container">
      <div className="related-product-section">
        <div className="related-product-img">
          <img src={image} alt="" />
        </div>
        <a href={path} className="related-product-button">
          <img src={blue_round_icon} alt="" />
        </a>
      </div>
      <div className="related-product-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default RelatedProductCard