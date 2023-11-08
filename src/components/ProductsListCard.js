import React from 'react'
import blue_round_icon from "../assets/images/png/blue_round_icon.png"
import "./ProductsListCard.css"

const ProductsListCard = ({image, title}) => {
  return (
    <div className='card-container'>
    <div className="card-section">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-next-button">
        <img src={blue_round_icon} alt="" />
      </div>
      
    </div>
    <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ProductsListCard