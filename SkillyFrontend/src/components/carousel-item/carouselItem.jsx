import React from "react";
import "./carousel-item.css";
import { assets } from "../../assets/app";
import temp from "../../assets/fa.jpg"

const CarouselItem = () => {
  return (
    <div className="ci">
      <div className="image">
        <img src={temp} alt="" />
      </div>
      <div className="text">
        <div className="cname">
          <h1>Skilly</h1>
        </div>
        <div className="cdesc">
          This is a Channel for Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aut delectus accusantium rerum! Expedita iusto autem
          delectus at ex commodi quibusdam corporis, doloribus, fugit eligendi,
          amet provident. In voluptatem mollitia officiis.
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
