import React from "react";
import red_arrow from "../assets/images/png/red_arrow.png";
import "./BlackButton.css";

const BlackButton = ({ path,title }) => {
  return (
    <div>
      <a className="black-button" href={path}>
        <span>{title}</span>{" "}
        <span>
          <img src={red_arrow} alt="" />
        </span>
      </a>
    </div>
  );
};

export default BlackButton;
