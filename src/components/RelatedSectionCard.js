import React from 'react'
import blue_round_icon from "../assets/images/png/blue_round_icon.png";
import "./RelatedSectionCard.css"

const RelatedSectionCard = ({image, title, path}) => {
  return (
    <div className=" related-section-card-container" >
      <div className="related-section">
        <div className="related-section-img">
          <img src={image} alt="" />
        </div>
        <a href={path} className="related-section-button">
          <img src={blue_round_icon} alt="" />
        </a>
      </div>
      <div className="related-section-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default RelatedSectionCard