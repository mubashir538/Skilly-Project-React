import React from "react";
import "./feature.css";
import ButtonAbt from "../button/button";
const Feature = ({ position, title, desc, img, btnText, btnlink }) => {
  let path = "/" + btnlink;
  let text = (
    <div className="text">
      <div className="title">{title}</div>
      <hr />
      <div className="desc">{desc}</div>
    <ButtonAbt text={btnText} path={path} color="#9381ff" target={"_self"}></ButtonAbt>
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
