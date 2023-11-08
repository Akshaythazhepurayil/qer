import React from "react";
import "./OurHistory.css";

const OurHistory = () => {
  return (
    <div className="our-history-container">
      <h3>Our History</h3>
      <div className="our-history">
        <div className="our-history-content">
          <h6>1987</h6>
          <p>Smart Technology was</p>
          <p>established</p>
          <p>in the Jeddah </p>
        </div>
        <div>
          <div className="our-history-content">
            <h6>2018</h6>
            <p>Al-Bassam Business </p>
            <p>Center</p>
          </div>
        </div>
      </div>
      <div className="our-history-bottom">
      <div className="our-history-bottom-content">
          <h6>1999-2011</h6>
          <p>Smart Technology opens</p>
          <p>offices in Jeddah.</p>
        </div>
        <div>
          <div className="our-history-bottom-content-b">
            <h6>2021</h6>
            <p>Streamline GTM and</p>
            <p>Rebranding</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default OurHistory;
