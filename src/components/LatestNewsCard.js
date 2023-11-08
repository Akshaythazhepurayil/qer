import React from "react";
import "./LatestNewsCard.css"

const LatestNewsCard = ({bg, image, head, subHead, tag}) => {
  return (
    <div className="latest-card-container">
      <div className="latest-card-img">
        <img className="" src={image} alt="" />
      </div>
      <div className="card-tag" style={{backgroundColor:bg}}>
        <p>{tag}</p>
      </div>
      <div className="card-content">
        <p className="head-text">{head}</p>
        <p className="sub-head">{subHead} </p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
