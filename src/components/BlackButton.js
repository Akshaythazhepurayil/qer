import React from "react";
import red_arrow from "../assets/images/png/red_arrow.png";
import "./BlackButton.css";

const BlackButton = ({ title }) => {
  return (
    <div>
      <a className="black-button" href="/">
        <span>{title}</span>{" "}
        <span>
          <img src={red_arrow} alt="" />
        </span>
      </a>
    </div>
  );
};

export default BlackButton;
