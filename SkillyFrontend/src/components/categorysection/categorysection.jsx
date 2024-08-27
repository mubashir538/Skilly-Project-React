import React from "react";
import "./categorysection.css";
import { assets } from "../../assets/app";

const CategorySection = ({name, img, desc}) => {
  return (
    <>
      <div className="button">
        <div className="icon">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
