import React from "react";
import "./categorysection.css";
import { useNavigate } from "react-router-dom";

const CategorySection = ({ name, img, desc, cat }) => {
  const location = useNavigate();

  const goto = (cat) => {
    location(`/courses`, { state: { cat } });
  };
  return (
    <>
      <div className="button" onClick={() => goto(name)}>
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
