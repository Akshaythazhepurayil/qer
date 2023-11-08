import React from "react";
import logo from "../assets/images/png/logo.png";
import searchIcon from "../assets/images/png/searchIcon.png";
import userIcon from "../assets/images/png/userIcon.png";
import "./Navbar.css";

const Navbar = ({navTextOne, navTexTwo, navTexThree, navTextFour, path, pathProducts, pathMedia, pathContact, navTextFive}) => {
  return (
    <>
      <div className="nav-container">
        <a className="logo" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav-items">
          <li>
            <a className="set-active nav-items-content"  href={path}>{navTextOne}</a>
          </li>
          <li>
            <a className="nav-items-content" href={pathProducts}>{navTexTwo}</a>
          </li>
          <li>
            <a className="nav-items-content" href={pathMedia}>{navTexThree}</a>
          </li>
          <li>
            <a className="nav-items-content" href={pathContact}>{navTextFour}</a>
          </li>
          {/* <li>
            <a href={pathContact}>{navTextFive}</a>
          </li> */}
        </ul>
        {/* <div className="drop-down" >
          <p className="rental">Rental</p>
          <p>Sales</p>
        </div> */}
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
    </>
  );
};

export default Navbar;
