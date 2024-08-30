import React from "react";
import "./CourseDescription.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";

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
    const fetchapis = async () => {
      const response1 = await axios
        .get(`http://127.0.0.1:8000/courseid/${id}`)
        .then((res) => {
          let val = res.data.data;
          let course = {
            id: val.id,
            name: val.name,
            description: val.description,
            image: val.image,
            Instructorid: val.Instructorid,
            courselink: val.courselink,
            user: val.user,
            categoryid: val.categoryid,
          };
          if (val.Instructorid !== undefined) {
            axios
              .get(`http://127.0.0.1:8000/instructorfromid/${val.Instructorid}`)
              .then((res) => {
                let instructor = {
                  instructor: res.data.data.instructor,
                  channelName: res.data.data.channelName,
                  channelLink: res.data.data.channelLink,
                  categoryid: res.data.data.categoryid,
                  instructorprofile: res.data.data.instructorprofile,
                  channelAbout: res.data.data.channelAbout,
                };
                let allitems = { ...course, ...instructor };
                if (val.user !== undefined) {
                  axios
                    .get(`http://127.0.0.1:8000/user/${val.user}`)
                    .then((res) => {
                      let user = {
                        username: res.data.data.name,
                        userprofile: res.data.data.profile,
                      };
                      let withuser = { ...allitems, ...user };
                      setData(withuser);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
                setData(allitems);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchapis();

    axios
      .get(`http://127.0.0.1:8000/loadVideos/${id}`)
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
          <Link to={data.courselink} target="_blank" className="btn-about">
            View Course on Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
