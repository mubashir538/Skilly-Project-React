import React, { useEffect, useState } from "react";
import "./toast.css";

const Toast = ({ message, play, setPlay, color }) => {
  useEffect(() => {
    if (play) {
      const time = setTimeout(() => {
        setPlay(false);
      }, 3000);

      return () => clearTimeout(time);
    }
  }, [play]);
  return (
    <>
      <div
        className="myToast"
        style={
          play === true
            ? {
                transform: "translateX(-50%)",
                opacity: ".8",
                "--color": color,
                color: color === "#EF233C" ? "#edf2f4" : "#000717",
                display: "block",
              }
            : {
                transform: "translateX(-100%)",
                opacity: "0",
                "--color": color,
                color: color === "#EF233C" ? "#edf2f4" : "#000717",
                display: "none",
              }
        }
      >
        {message}
      </div>
    </>
  );
};

export default Toast;
