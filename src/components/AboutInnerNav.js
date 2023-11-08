import React from "react";
import settings_icon from "../assets/images/png/settings_icon.png";
import vision_icon from "../assets/images/png/vision_icon.png";
import "./AboutInnerNav.css";
import MissionCard from "./MissionCard";
import Capabilities from "./Capabilities";
import OurHistory from "./OurHistory";

const AboutInnerNav = () => {
  return (
    <>
      <div className="about-nav-container">
        <ul className="nav-list">
          <li>
            <a className="active nav-list-item" href="/">
              Our Story
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Mission, Vision & Values{" "}
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Capabilities{" "}
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Our History
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Our Group
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Testimonials
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Management Team
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Our Team
            </a>
          </li>
        </ul>
        <div className="who-we-are-text">
          <h1>Who We Are</h1>
          <p>
            Quality Equipment Rental LLC was founded in 2007. We deal in rental
            of various construction equipment. Our fleet covers wide range of
            equipment from Diesel Generators, Light Towers, Telescopic Handlers,
            Backhoe Loaders, Air Compressors, Rollers, Access
            Machines,Excavators, Motor Graders, Dozers and Forklifts.
          </p>
          <p>
            With our presence in Dubai, Abu Dhabi and Northern Emirates, we
            cover all parts of the UAE in supporting our customers for all their
            equipment hiring needs. QER also provides equipment services to the
            Oil and Gas industry and has successfully managed HVAC projects for
            reputed clients. Our perfect teamwork enables us to provide
            outstanding customer service, on time deliveries.
          </p>
        </div>
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
