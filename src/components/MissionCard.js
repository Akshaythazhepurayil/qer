import React from 'react'
import "./MissionCard.css"


const MissionCard = ({image, mainHead, subHead, content}) => {
  return (
    <div className="mission-container">
        <div className="mission-content">
          <span>
            <img src={image} alt="settings-icon" />
          </span>
          <div className="mission-text">
            <h2>{subHead}</h2>
            <p>{content}</p>
          </div>
        </div>
        <h1>{mainHead}</h1>
      </div>
  )
}

export default MissionCard