import React from "react";
import "./card1.css";
import { assets } from "../../assets/app";
import temp from "../../assets/fa.jpg";
const Card1 = () => {
  return (
    <>
      <div className="card1">
        <img src={temp} alt="" />
        <h1>Computer Programming</h1>
        <p>Tech-IQ</p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
    </>
  );
};

export default Card1;
