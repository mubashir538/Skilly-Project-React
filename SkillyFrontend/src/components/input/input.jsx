import React from "react";
import "./input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Input = ({ typ, placeholder, setdata }) => {
  const [passee, setpassee] = useState(typ !== "password");
  const [text, settext] = useState("");
  const location = useLocation();

  useEffect(() => {
    const clearview = () => {
      settext("");
    }
    clearview()
  },[location.pathname])

  // let changeText = (e) => {
  //   settext(e.target.value);
  // };
  let handlepass = () => {
    setpassee((prev) => !prev);
  };

  const inputType = passee ? "text" : "password";
  const icon = passee ? faEye : faEyeSlash;
  return (
    <div className="group">
      <input
      value={text}
        required=""
        type={inputType}
        className="input"
        onChange={(e) => {
          settext(e.target.value);
          setdata(e.target.value);
        }}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className={text.trim().length > 0 ? "writed" : ""}>
        {placeholder}
      </label>
      {typ === "password" && (
        <FontAwesomeIcon icon={icon} onClick={handlepass} />
      )}
    </div>
  );
};

export default Input;
