import React, { useEffect } from "react";
import "./Viewer.css";
import { useParams } from "react-router-dom";

const Viewer = ({ video }) => {
  const id = video.videoid;
  const title = video.title;
  const description = video.description;
  const duration = video.duration;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Viewer";
  });

  return (
    <div className="viewer">
      <iframe
        className="fram"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="title">{title}</div>
      <hr />
      <div className="description">{description}</div>
      <hr />
      <div className="duration">Duration : {duration}</div>
    </div>
  );
};

export default Viewer;
