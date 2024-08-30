import React, { useEffect } from "react";
import "./AddCourse.css";
import axios from "axios";
import Cookies from "js-cookie";

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
}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Add Course";
  })
  const handleOnClick = async () => {
    if (type === "add") {
      const response = await axios.post("http://127.0.0.1:8000/instructor/", {
        teacher: teacher,
        channelLink: channelLink,
        Category: Category,
      });
      if (response.data.status == "400") {
        alert("Invalid Channel Link!");
        return;
      }
      if (response.data.status == "200") {
        const response2 = await axios.post("http://127.0.0.1:8000/course/", {
          name: courseName,
          playlistlink: playlistlink,
          instructor: response.data.id,
          category: Category,
          userid: Cookies.get("user").split('"')[2].split(":")[1].split(",")[0],
        });
        console.log(response2)
      }
    }
  };
  return (
    <>
      <div className="addcourse">
        <div className="addcard">
          <div className="heading">{heading}</div>
          <div className="inputs">
            {children}
            <button className="button2" onClick={() => handleOnClick()}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
