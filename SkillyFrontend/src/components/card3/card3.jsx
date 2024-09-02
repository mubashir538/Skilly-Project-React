import React from "react";
import "./card3.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const Card3 = ({ item }) => {
  const [instructor, setInstructor] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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
    window.open("/CourseDescription/" + id, "_self");
  };
  return (
    <div
      className="cb"
      onClick={
        item.insid === undefined
          ? () => {
              window.open("/addcourse", "_self");
            }
          : () => {}
      }
    >
      <div className="card3">
        {item.name === "Add Course" ? (
          <div
            className="forimg"
            onClick={() => window.open("/addcourse", "_self")}
          >
            <img
              style={{ width: "60%", height: "60%", objectFit: "contain" }}
              src={item.img}
              alt=""
            />
          </div>
        ) : (
          <img src={item.img} alt="" />
        )}
        <div className="text">
          <div className="title">{item.name}</div>
          <hr className="cardhr" />
          {location.pathname === "/profile" && item.name !== "Add Course" ? (
            <>
              <div className="icons">
                <FontAwesomeIcon
                  icon={faPencil}
                  size="2xl"
                  onClick={() =>
                    navigate("/editcourse", { state: { item: item } })
                  }
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  size="2xl"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this course?"
                      )
                    ) {
                      axios
                        .get(`http://127.0.0.1:8000/deletecourse/${item.id}`)
                        .then((res) => {
                          window.location.reload();
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }
                  }}
                />
              </div>
            </>
          ) : (
            <div className="cname">{instructor}</div>
          )}
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
