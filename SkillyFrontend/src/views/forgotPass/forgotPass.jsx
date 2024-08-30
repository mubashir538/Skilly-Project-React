import React from "react";
import "./forgotPass.css";

const Forgot = ({ heading, para, children, type }) => {
  return (
    <>
      <div className="screen">
        <div className="card">
          <div className="heading">{heading}</div>
          <div className="para">{para}</div>
          <div className="inputs">{children}</div>
          <div className="btn-about">{type === "forgot" ? "Send" : "Verify"}</div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
