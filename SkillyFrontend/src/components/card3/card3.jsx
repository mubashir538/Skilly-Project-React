import React from "react";
import "./card3.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const Card3 = ({ item }) => {
  const [instructor, setInstructor] = useState("");
  useEffect(() => {
    if (item.insid !== undefined) {
      axios
        .get(`http://127.0.0.1:8000/instructorfromid/${item.insid}`)
        .then((res) => {
          setInstructor(res.data.data.channelName);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handlelink = (id) => {
    if (id === "") {
      return;
    }
    let link = 
    window.open('/CourseDescription/'+id, "_self");
  };
  return (
    <div className="cb">
      <div className="card3">

        {item.name === "Add Course"?<div className="forimg" onClick={() => window.open("/addcourse", "_self")}>
          <img style={{width:"60%", height:"60%", objectFit:"contain"}} src={item.img} alt="" />
        </div>:
        <img src={item.img} alt="" />
        }
        <div className="text">
          <div className="title">{item.name}</div>
          <hr className="cardhr" />
          <div className="cname">{instructor}</div>
          {item.courselink === "" ? (
            <></>
          ) : (
            <button onClick={() => handlelink(item.id)}>View</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card3;
