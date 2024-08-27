import React from "react";
import "./feature.css";
import { Link } from "react-router-dom";
const Feature = ({ position, title, desc, img, btnText, btnlink }) => {
  let path = "/" + btnlink;
  let text = (
    <div className="text">
      <div className="title">{title}</div>
      <hr />
      <div className="desc">{desc}</div>
      <Link to={path} className="btn-about">
        {btnText}
      </Link>
    </div>
  );

  let image = (
    <div className="img">
      <img src={img} alt="" />
    </div>
  );
  let content = (
    <>
      {image}
      {text}
    </>
  );

  if (position % 2 === 0) {
    content = (
      <>
        {text}
        {image}
      </>
    );
  }

  return (
    <>
      <div className="feature">{content}</div>
    </>
  );
};

export default Feature;
