import React from 'react'
import left_button from "../assets/images/png/left_button.png";
import right_button from "../assets/images/png/right_button.png";
import "./CarouselButton.css"

const CarouselButton = () => {
  return (
    <div className="latest-news-button">
          <img src={left_button} alt="" />
          <img src={right_button} alt="" />
        </div>
  )
}

export default CarouselButton