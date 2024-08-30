import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const ButtonAbt = ({ text, path, color, target, click }) => {
  let value = (
    <Link
      to={path}
      target={target}
      className="btn-about"
      style={{ "--color": color }}
    >
      {text}
    </Link>
  );
  if (path == undefined) {
    value = (
      <div
        onClick={click}
        className="btn-about"
        style={{ "--color": color }}
      >
        {text}
      </div>
    );
  }
  return <>{value}</>;
};

export default ButtonAbt;
