import React from 'react'
import blue_round_icon from "../assets/images/png/blue_round_icon.png";
import "./RelatedProductCard.css"

const RelatedProductCard = ({ image, title, path }) => {
  return (
    <div className="related-card-container">
      <div className="related-card-section">
        <div className="related-card-img">
          <img src={image} alt="" />
        </div>
        <a href={path} className="related-card-next-button">
          <img src={blue_round_icon} alt="" />
        </a>
      </div>
      <div className="related-card-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default RelatedProductCard