import React from "react";
import "./input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Input = ({ typ, placeholder }) => {
  const [passee, setpassee] = useState(typ !== "password");
  const [text, settext] = useState("");

  let handlepass = () => {
    setpassee((prev) => !prev);
  };

  const inputType = passee ? "text" : "password";
  const icon = passee ? faEye : faEyeSlash;
  return (
    <div className="group">
      <input
        required=""
        type={inputType}
        className="input"
        onChange={(e) => settext(e.target.value)}
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
