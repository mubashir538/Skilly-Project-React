import React from "react";
import "./CourseDescription.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";
import ButtonAbt from "../../components/button/button";
import { getCourseDescription, getCourseVideos } from "../../codes/api/Courses";

const CourseDescription = ({ setVideo }) => {
  const id = useParams().id;
  const [data, setData] = useState({});
  const [isChevronDown, setIsChevronDown] = useState(true);
  const [videos, setVideos] = useState([]);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsChevronDown(!isChevronDown);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Description";
    getCourseDescription(id, setData);

    getCourseVideos(id, setVideos);
  }, []);

  const handleVideo = (video) => {
    setVideo(video);
    navigate("/Viewer");
  };
  
  return load ? (
    <Loader />
  ) : (
    <div className="coursedesc">
      <div className="head">
        <div className="img">
          <img src={data.image} alt="" />
        </div>
        <div className="text">
          <h1>{data.name}</h1>
          <div className="channel">
            <img src={data.instructorprofile} alt="" />
            <p>{data.channelName}</p>
          </div>
        </div>
      </div>
      <div className="playlistsection">
        <h1>Playlist</h1>
        <div className="videos px-4 py-4 " data-aos="flip-up">
          <div className="collapse" id="collapseExample">
            <div className="videotable">
              <div className="row-t thead">
                <p className="sno">S.No</p>
                <p className="title">Title</p>
                <p className="duration">Duration</p>
              </div>
              {videos.map((video, index) => (
                <div
                  className="row-t"
                  key={index}
                  onClick={() => {
                    handleVideo(video);
                  }}
                >
                  <p className="sno">{index + 1}</p>
                  <p className="title">{video.title}</p>
                  <p className="duration">{video.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <div></div>
          {isChevronDown ? (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "#EDF2F4" }}
              size="2xl"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={handleIconClick}
            />
          ) : (
            <FontAwesomeIcon
              size="2xl"
              icon={faChevronUp}
              style={{ color: "#EDF2F4" }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={handleIconClick}
            />
          )}
        </div>
      </div>
      <hr />
      <div className="channelinfo">
        <h1>Channel Info</h1>
        <div className="info">
          <div className="image">
            <img src={data.instructorprofile} alt="" />
          </div>
          <div className="text">
            <div className="name">{data.instructor}</div>
            <div className="cname">{data.channelName}</div>
            <div className="description">{data.channelAbout}</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="moreopt">
        <h1>Uploaded By</h1>
        <div className="info">
          <div className="image">
            <img src={"http://127.0.0.1:8000/" + data.userprofile} alt="" />
          </div>
          <div className="text">
            <div className="name">{data.username}</div>
          </div>
          <ButtonAbt
            text="View Course on Youtube"
            path={"https://www.youtube.com/@"+data.channelLink}
            target={"_blank"}
            color={"#9381ff"}
          ></ButtonAbt>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
