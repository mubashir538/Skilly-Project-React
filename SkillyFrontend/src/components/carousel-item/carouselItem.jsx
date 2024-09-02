import React from "react";
import "./carousel-item.css";

const CarouselItem = ({details}) => {
  return (
    <div className="ci">
      <div className="image">
        <img src={details.instructorprofile} alt="" />
      </div>
      <div className="text">
        <div className="cname">
          <h1>{details.instructor}</h1>
        </div>
        <div className="cdesc">
          {details.channelAbout.slice(0,501)}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
