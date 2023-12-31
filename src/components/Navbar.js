import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import searchIcon from "../assets/images/png/searchIcon.png";
import userIcon from "../assets/images/png/userIcon.png";
import menu from "../assets/images/png/menu_icon.png";
import close from "../assets/images/png/close_icon.png";
import "./Navbar.css";

const Navbar = ({
  navText,
  homePath,
  navTextOne,
  navTexTwo,
  navTexThree,
  navTextFour,
  path,
  pathProducts,
  pathMedia,
  pathContact,
  navTextFive,
}) => {
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState("text");
  const showMenue = () => setShow(!show);

  const handleClick = (sectionId) => {
    setActiveNav(sectionId);
  };

  return (
    <>
      <div className="nav-container">
        <a className="logo" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav-items">
        <li>
            <a
              className={`nav-items-content ${
                activeNav === "text" ? "set-active" : ""
              }`}
              onClick={() => handleClick("text")}
              sectionId="text"
              href={homePath}
            >
              {navText}
            </a>
          </li>
          <li>
            <a
              className={`nav-items-content ${
                activeNav === "text-one" ? "set-active" : ""
              }`}
              onClick={() => handleClick("text-one")}
              sectionId="text-one"
              href={path}
            >
              {navTextOne}
            </a>
          </li>
          <li>
            <a
              className={`nav-items-content ${
                activeNav === "text-two" ? "set-active" : ""
              }`}
              onClick={() => handleClick("text-two")}
              sectionId="text-two"
              href={pathProducts}
            >
              {navTexTwo}
            </a>
          </li>
          <li>
            <a
              className={`nav-items-content ${
                activeNav === "text-three" ? "set-active" : ""
              }`}
              onClick={() => handleClick("text-three")}
              sectionId="text-three"
              href={pathMedia}
            >
              {navTexThree}
            </a>
          </li>
          <li>
            <a
              className={`nav-items-content ${
                activeNav === "text-four" ? "set-active" : ""
              }`}
              onClick={() => handleClick("text-four")}
              sectionId="text-four"
              href={pathContact}
            >
              {navTextFour}
            </a>
          </li>
        </ul>
        <div className="signup-section">
          <div className="search-field">
            <button className="">
              <span>
                <img src={searchIcon} alt="" />
              </span>
            </button>
            <input type="text" placeholder="Search for Rent and Buy...." />
          </div>
          <a href="/" className="signin-button">
            <span>
              <img src={userIcon} alt="" />
            </span>
            Sign In / Register
          </a>
        </div>
      </div>
      {/* mob */}

      <div className="mob-nav-container">
        <div className="mob-nav-head">
          <a className="mob-logo" href="/">
            <span>
              <img src={logo} alt="Logo" />
            </span>
          </a>
          <div onClick={showMenue} className="menu-icon">
            <img src={show ? close : menu} alt="" />
          </div>
        </div>
        {show ? (
          <div className="mob-nav">
            <ul className="mob-nav-items">
            <li>
            <a
              className={`mob-nav-items-content ${
                activeNav === "text" ? "set-active" : ""
              }`}
              onClick={() => handleClick("text")}
              sectionId="text"
              href={homePath}
            >
              {navText}
            </a>
          </li>
              <li>
                <a className={`mob-nav-items-content ${
                activeNav === "text-five" ? "set-active" : ""
              }`}
              onClick={() => handleClick("text-five")}
              id="text-five" href={path}>
                  {navTextOne}
                </a>
              </li>
              <li>
                <a className="mob-nav-items-content" href={pathProducts}>
                  {navTexTwo}
                </a>
              </li>
              <li>
                <a className="mob-nav-items-content" href={pathMedia}>
                  {navTexThree}
                </a>
              </li>
              <li>
                <a className="mob-nav-items-content" href={pathContact}>
                  {navTextFour}
                </a>
              </li>
            </ul>
            <div className="mob-signup-section">
              <div className="mob-search-field">
                <button className="search-icon">
                  <span>
                    <img src={searchIcon} alt="" />
                  </span>
                </button>
                <input type="text" placeholder="Search for Rent and Buy...." />
              </div>
              <a href="/" className="mob-signin-button">
                <span>
                  <img src={userIcon} alt="" />
                </span>
                Sign In / Register
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
