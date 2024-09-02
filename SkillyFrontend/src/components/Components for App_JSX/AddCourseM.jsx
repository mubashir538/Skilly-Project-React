import React from "react";
import AddCourse from "../../views/AddCourse/AddCourse";
import Input from "../../components/input/input";
import { Link } from "react-router-dom";

const AddCourseM = ({
  courseName,
  teacher,
  channelLink,
  playlistlink,
  selectedCategory,
  setCourseName,
  setPlaylistlink,
  setChannelLink,
  setTeacher,
  setSelectedCategory,
  category,
  play,
  setPlay,
  setToastColor,
  setToast,
}) => {
  return (
    <AddCourse
      type={"add"}
      heading={"Add Course"}
      btnText={"Upload"}
      courseName={courseName}
      teacher={teacher}
      channelLink={channelLink}
      playlistlink={playlistlink}
      Category={selectedCategory}
      play={play}
      setPlay={setPlay}
      setToastColor={setToastColor}
      setToast={setToast}
    >
      <Input typ="text" placeholder="Course Name" setdata={setCourseName} />
      <div className="menu">
        <div className="item">
          <Link href="#" className="link">
            <span>
              {" "}
              {selectedCategory[1] !== undefined
                ? selectedCategory[1]
                : "Category"}{" "}
            </span>
            <svg viewBox="0 0 360 360" xmlSpace="preserve">
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                ></path>
              </g>
            </svg>
          </Link>
          <div className="submenu">
            {category.map((value, index) => (
              <div className="submenu-item" key={index}>
                <a
                  href="#"
                  className="submenu-link"
                  onClick={() => setSelectedCategory([value.id, value.name])}
                >
                  {value.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Input typ="text" placeholder="Course Link" setdata={setPlaylistlink} />
      <Input typ="text" placeholder="Instructor Name" setdata={setTeacher} />
      <Input typ="text" placeholder="Channel Link" setdata={setChannelLink} />
    </AddCourse>
  );
};

export default AddCourseM;
