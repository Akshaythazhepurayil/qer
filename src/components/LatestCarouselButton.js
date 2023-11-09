import React from 'react'
import left_button from "../assets/images/png/left_button.png";
import right_button from "../assets/images/png/right_button.png";
import "./LatestCarouselButton.css"

const LatestCarouselButton = () => {
  return (
    <div className="latest-news-button">
      <img className="prev-btn" src={left_button} alt="" />
      <img className="next-btn" src={right_button} alt="" />
    </div>
  )
}

export default LatestCarouselButton