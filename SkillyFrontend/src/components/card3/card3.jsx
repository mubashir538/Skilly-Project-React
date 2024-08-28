import React from "react";
import "./card3.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const Card3 = ({ item }) => {
  const [instructor, setInstructor] = useState("");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/instructorfromid/${item.insid}`)
      .then((res) => {
        setInstructor(res.data.data.channelName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlelink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="cb">
      <div className="card3">
        <img src={item.img} alt="" />
        <div className="text">
          <div className="title">{item.name}</div>
          <hr className="cardhr" />
          <div className="cname">{instructor}</div>
          <button onClick={() =>{handlelink(item.courselink)}}>View</button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
