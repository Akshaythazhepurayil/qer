import React from "react";
import triangle_icon from "../assets/images/png/triangle_icon.png";
import "./Capabilities.css";

const Capabilities = () => {
  return (
    <div className="capabilities-container">
      <div className="capabilities">
        <div className="capabilities-left">
          <h2>Capabilities</h2>
          <p>
            Fusce sodales nec lacus vitae consequat. Vivamus sed tincidunt
            tellus, ac venenatis ex.
          </p>
        </div>
        <ul className="capabilities-right">
          <li className="capabilities-right-content">
            <span>
              <img src={triangle_icon} alt="" />
            </span>
            Provide proper safety training to customers
          </li>
          <li className="capabilities-right-content">
            <span>
              <img src={triangle_icon} alt="" />
            </span>
            Quality checking at every stage
          </li>
          <li className="capabilities-right-content">
            <span>
              <img src={triangle_icon} alt="" />
            </span>
            Immediate action upon customer complaints
          </li>
          <li className="capabilities-right-content">
            <span>
              <img src={triangle_icon} alt="" />
            </span>
            To cover all health, safety and environmental issues
          </li>
          <li className="capabilities-right-content">
            <span>
              <img src={triangle_icon} alt="" />
            </span>
            Adoption of up to date know how for enhancement of performance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Capabilities;
