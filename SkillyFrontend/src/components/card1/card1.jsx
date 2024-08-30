import React from "react";
import "./card1.css";
import { assets } from "../../assets/app";
import temp from "../../assets/fa.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const Card1 = ({ item }) => {
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
  return (
    <>
      <div className="card1">
        <img src={item.img} alt="" />
        <h1>{item.name}</h1>
        <p>{instructor}</p>
        <button className="learn-more" onClick={() => window.open('/courseDescription/' + item.id, "_self")}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
    </>
  );
};

export default Card1;
