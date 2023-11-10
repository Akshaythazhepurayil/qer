import React from "react";
import white_check from "../assets/images/png/white_check.png";
import "./DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <>
      <ul className="nav-item">
        <li>
          <a className="active-nav-item nav-item-list" href="/">
            Our Story
          </a>
        </li>
        <li>
          <a className="nav-item-list" href="/">
            Mission, Vision & Values
          </a>
        </li>
        <li>
          <a className="nav-item-list" href="/">
            Capabilities
          </a>
        </li>
      </ul>
      <div className="desc-details-section">
        <p className="content-one">
          Praesent condimentum ex sed nunc laoreet blandit. Fusce ac lorem nunc.
          Quisque mauris ligula, eleifend sit amet semper vel, convallis sed
          erat. Donec at ultricies lorem. Aliquam quis ultricies felis. Quisque
          accumsan quis metus ultricies laoreet. Ut pharetra eu lectus non
          ultrices. Curabitur iaculis, mauris aliquet feugiat consequat, ex diam
          hendrerit massa, id scelerisque metus mi vel mi. Morbi sed accumsan
          elit. Nullam rhoncus euismod finibus.
        </p>
        <p className="content-two">
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nunc et risus ante. Donec malesuada rhoncus
          diam vel tempus. Maecenas maximus porta erat, a scelerisque velit
          porttitor id.
        </p>
        <div className="select-section">
          <div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>Sed feugiat tincidunt est in pretium.</p>
            </div>
            <div className=" select-content">
              <span>
                <img className="check-active select-content-img" src={white_check} alt="" />
              </span>
              <p>Sed egestas purus at vulputate </p>
            </div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>feugiat. Integer sollicitudin iaculis leo,</p>
            </div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>eu efficitur justo hendrerit eu. Ut </p>
            </div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>molestie sapien nisl, sit amet aliquet</p>
            </div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>quam ultrices vel. In hac habitasse </p>
            </div>
          </div>
          <div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>Sed feugiat tincidunt est in pretium.</p>
            </div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>Sed egestas purus at vulputate </p>
            </div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>feugiat. Integer sollicitudin iaculis leo,</p>
            </div>
            <div className="select-content">
              <span>
                <img className="select-content-img" src={white_check} alt="" />
              </span>
              <p>eu efficitur justo hendrerit eu. Ut </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionSection;
