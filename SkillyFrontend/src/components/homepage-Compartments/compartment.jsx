import React from "react";
import "./compartment.css";

const Compartment = ({ children, title, padding, headpad }) => {
  return (
    <>
      <hr />
      <div
        className="compartment"
        style={{ paddingLeft: padding, paddingRight: padding }}
      >
        <h1 style={{ paddingLeft: headpad, paddingRight: headpad }}>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Compartment;
