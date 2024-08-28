import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { Button, Container } from "react-bootstrap";
import { assets } from "../../assets/app";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="foothead">
        <div className="logo">
          <img src={assets.logo} alt="logo" />
        </div>
        <div className="pages">
          <h1>Pages</h1>
          <p>
            <Link to="/category">Categories</Link>
          </p>
          <p>
            <Link to="/instructor">Instructors</Link>
          </p>
          <p>
            <Link to="/courses">Courses</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
        </div>
        <div className="social">
          <h1>Social</h1>
          <p
            onClick={() =>
              window.open(
                "https://www.facebook.com/MubashirA.QuantamLabs",
                "_blank"
              )
            }
          >
            Facebook
          </p>
          <p
            onClick={() =>
              window.open(
                "https://www.instagram.com/mubashir.ahmed96/",
                "_blank"
              )
            }
          >
            Instagram
          </p>
          <p
            onClick={() =>
              window.open("https://github.com/quantam-labs", "_blank")
            }
          >
            Github
          </p>
          <p
            onClick={() =>
              window.open("https://www.youtube.com/@techiq4478", "_blank")
            }
          >
            Youtube
          </p>
        </div>
        <div className="contact">
          <button className="btn-shine">
            <span>Contact Me</span>
          </button>
          <h1>Contact</h1>
          <p>Phone: 03232730519</p>
          <p>Email: mubashirahmed24500@gmail.com</p>
        </div>
      </div>
      <div className="foottail">
        <FontAwesomeIcon icon={faCopyright} />
        <p>Skilly 2024. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
