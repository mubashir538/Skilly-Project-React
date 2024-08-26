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
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button>
      </div>
    </>
  );
};

export default Card1;
