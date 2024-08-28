import React from "react";
import "./card2.css";
import temp from "../../assets/fa.jpg";
import { Link } from "react-router-dom";

const Card2 = ({ details }) => {
  details.channelLink = "https://www.youtube.com/c/" + details.channelLink;
  const {
    id,
    instructor,
    channelName,
    channelLink,
    categoryid,
    instructorprofile,
    channelAbout,
  } = details;
  return (
    <>
      <div className="cb">
        <div className="card">
          <div className="card-content">
            <div className="imge">
              <img src={instructorprofile} alt="" width="100%" />
            </div>
            <div className="name-profession">
              <span className="name">{instructor}</span>
              <span className="profession">{channelName}</span>
            </div>
            <Link target="_blank" className="btnpic" to={channelLink}>
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
