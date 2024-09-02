import React, { useEffect } from "react";
import "./AddCourse.css";
import { useNavigate } from "react-router-dom";
import { handleOnClick } from "../../codes/functions/handleAddEditCourse";

const AddCourse = ({
  heading,
  children,
  type,
  btnText,
  courseName,
  teacher,
  channelLink,
  playlistlink,
  Category,
  CategoryIndex,
  setPlay,
  setToastColor,
  setToast,
  location,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Add Course";
  }, []);

  return (
    <>
      <div className="addcourse">
        <div className="addcard">
          <div className="heading">{heading}</div>
          <div className="inputs">
            {children}
            <button
              className="button2"
              onClick={() =>
                handleOnClick(
                  location,
                  type,
                  setPlay,
                  setToastColor,
                  setToast,
                  CategoryIndex,
                  Category,
                  courseName,
                  playlistlink,
                  teacher,
                  channelLink,
                  navigate
                )
              }
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
