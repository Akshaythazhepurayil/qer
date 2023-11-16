import React, { useState } from "react";
import settings_icon from "../assets/images/png/settings_icon.png";
import vision_icon from "../assets/images/png/vision_icon.png";
import "./AboutInnerNav.css";
import MissionCard from "./MissionCard";
import Capabilities from "./Capabilities";
import OurHistory from "./OurHistory";

const AboutInnerNav = () => {
  const [contentSwitching, setContentSwitching] = useState("story");
  const handleSwitching = (sectionId) => {
    setContentSwitching(sectionId);
  };
  return (
    <>
      <div className="about-nav-container">
        <ul className="nav-list">
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "story" ? "active" : ""
              }`}
              onClick={() => handleSwitching("story")}
            >
              Our Story
            </button>
          </li>
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "mission-vision-values" ? "active" : ""
              }`}
              onClick={() => handleSwitching("mission-vision-values")}
            >
              Mission, Vision & Values
            </button>
          </li>
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "about-capabilities" ? "active" : ""
              }`}
              onClick={() => handleSwitching("about-capabilities")}
            >
              Capabilities
            </button>
          </li>
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "our-history" ? "active" : ""
              }`}
              onClick={() => handleSwitching("our-history")}
            >
              Our History
            </button>
          </li>
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "our-group" ? "active" : ""
              }`}
              onClick={() => handleSwitching("our-group")}
            >
              Our Group
            </button>
          </li>
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "testimonials" ? "active" : ""
              }`}
              onClick={() => handleSwitching("testimonials")}
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "management-team" ? "active" : ""
              }`}
              onClick={() => handleSwitching("management-team")}
            >
              Management Team
            </button>
          </li>
          <li>
            <button
              className={`nav-list-item ${
                contentSwitching === "our-team" ? "active" : ""
              }`}
              onClick={() => handleSwitching("our-team")}
            >
              Our Team
            </button>
          </li>
        </ul>
        {contentSwitching === "story" ? (
          <div className="who-we-are-text" id="story">
            <h1>Who We Are</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers, Backhoe Loaders, Air Compressors, Rollers,
              Access Machines,Excavators, Motor Graders, Dozers and Forklifts.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC
              projects for reputed clients. Our perfect teamwork enables us to
              provide outstanding customer service, on time deliveries.
            </p>
          </div>
        ) : (
          ""
        )}
        {contentSwitching === "mission-vision-values" ? (
          <div className="who-we-are-text" id="mission-vision-values">
            <h1>Mission, Vision & Values</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers,
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC
              projects for reputed clients. Our perfect teamwork enables us to
              provide
            </p>
          </div>
        ) : (
          ""
        )}
        {contentSwitching === "about-capabilities" ? (
          <div className="who-we-are-text" id="about-capabilities">
            <h1>Capabilities</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers, Backhoe Loaders, Air Compressors, Rollers,
              Access Machines,Excavators, Motor Graders, Dozers and Forklifts.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC
              projects for reputed clients. Our perfect teamwork enables us to
              provide outstanding customer service, on time deliveries.
            </p>
          </div>
        ) : (
          ""
        )}
        {contentSwitching === "our-history" ? (
          <div className="who-we-are-text" id="our-history">
            <h1>Our History</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers, Backhoe Loaders, Air Compressors, Rollers,
              Access Machines,Excavators, Motor Graders, Dozers and Forklifts.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC
              projects for reputed clients. Our perfect teamwork enables us to
              provide outstanding customer service, on time deliveries.
            </p>
          </div>
        ) : (
          ""
        )}
        {contentSwitching === "our-group" ? (
          <div className="who-we-are-text" id="our-group">
            <h1>Our Group</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers, Backhoe Loaders, Air Compressors, Rollers,
              Access Machines,Excavators, Motor Graders, Dozers and Forklifts.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC
              projects for reputed clients. Our perfect teamwork enables us to
              provide outstanding customer service, on time deliveries.
            </p>
          </div>
        ) : (
          ""
        )}
        {contentSwitching === "testimonials" ? (
          <div className="who-we-are-text" id="testimonials">
            <h1>Testimonials</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers, Backhoe Loaders, Air Compressors, Rollers,
              Access Machines,Excavators, Motor Graders, Dozers and Forklifts.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC to
              provide outstanding customer service, on time deliveries.
            </p>
          </div>
        ) : (
          ""
        )}
        {contentSwitching === "management-team" ? (
          <div className="who-we-are-text" id="management-team">
            <h1>Management Team</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers, Backhoe Loaders, Air Compressors, Rollers,
              Access Machines,Excavators, Motor Graders, Dozers and Forklifts.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC
              projects for reputed clients. Our perfect teamwork enables us to
              provide outstanding customer service, on time deliveries.
            </p>
          </div>
        ) : (
          ""
        )}
        {contentSwitching === "our-team" ? (
          <div className="who-we-are-text" id="our-team">
            <h1>Our Team</h1>
            <p>
              Quality Equipment Rental LLC was founded in 2007. We deal in
              rental of various construction equipment. Our fleet covers wide
              range of equipment from Diesel Generators, Light Towers,
              Telescopic Handlers, Backhoe Loaders, Air Compressors, Rollers,
              Access Machines,Excavators, Motor Graders, Dozers and Forklifts.
            </p>
            <p>
              With our presence in Dubai, Abu Dhabi and Northern Emirates, we
              cover all parts of the UAE in supporting our customers for all
              their equipment hiring needs. QER also provides equipment services
              to the Oil and Gas industry and has successfully managed HVAC
              projects for reputed clients. Our perfect teamwork enables us to
              provide outstanding customer service, on time deliveries.
            </p>
          </div>
        ) : (
          ""
        )}
        <MissionCard
          image={settings_icon}
          mainHead="Mission"
          subHead="Our Mission"
          content="Provide wide range of top quality equipment and customized rental
              solutions to satisfy the specific needs of various industries like
              construction, power generation, oil and gas and events."
        />
        <div className="vision-card">
          <MissionCard
            image={vision_icon}
            mainHead="Vision"
            subHead="Our Vision"
            content="Provide highest quality equipment and solutions to our customers
          at lowest cost and deploying the best people to build a better
          future."
          />
        </div>
        <div className="core-value-container">
          <h3>Core Values</h3>
          <div className="core-value-items">
            <div className="core-value-border-style">
              <p>Customer Service</p>
            </div>
            <div className="core-value-border-style">
              <p>Quality</p>
            </div>
            <div className="core-value-border-style">
              <p>Commitment</p>
            </div>
            <div className="core-value-border-style">
              <p>Integrity</p>
            </div>
          </div>
        </div>
      </div>
      <Capabilities />
      <OurHistory />
    </>
  );
};

export default AboutInnerNav;
