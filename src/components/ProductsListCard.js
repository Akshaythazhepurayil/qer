import React from 'react'
import blue_round_icon from "../assets/images/png/blue_round_icon.png"
import "./ProductsListCard.css"

const ProductsListCard = ({image, title, path}) => {
  return (
    <div className='card-container'>
    <div className="card-section">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <a href={path} className="card-next-button">
        <img src={blue_round_icon} alt="" />
      </a>
      
    </div>
    <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ProductsListCard