import React from "react";
import "./card3.css";
import temp from "../../assets/fa.jpg";

const Card3 = () => {
  return <div className="cb">
    <div className="card3">
    <img src={temp} alt="" />
    <div className="text">
        <div className="title">Programming Course from Basic to Advance</div>
        <hr className="cardhr"/>
        <div className="cname">TechIQ</div>
        <button>View</button>
    </div>
  </div>
  </div>;
};

export default Card3;
