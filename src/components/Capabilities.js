import React from 'react'
import triangle_icon from "../assets/images/png/triangle_icon.png";
import "./Capabilities.css"

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
          <div className="capabilities-right">
            <div className="capabilities-right-content">
              <span>
                <img src={triangle_icon} alt="" />
              </span>
              <p>Provide proper safety training to customers</p>
            </div>
            <div className="capabilities-right-content">
              <span>
                <img src={triangle_icon} alt="" />
              </span>
              <p>Quality checking at every stage</p>
            </div>
            <div className="capabilities-right-content">
              <span>
                <img src={triangle_icon} alt="" />
              </span>
              <p>Immediate action upon customer complaints</p>
            </div>
            <div className="capabilities-right-content">
              <span>
                <img src={triangle_icon} alt="" />
              </span>
              <p>To cover all health, safety and environmental issues</p>
            </div>
            <div className="capabilities-right-content">
              <span>
                <img src={triangle_icon} alt="" />
              </span>
              <p>Adoption of up to date know how for enhancement of performance</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Capabilities