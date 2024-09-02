import React from "react";
import "./Profile.css";
import Card3 from "../../components/card3/card3";
import { useEffect, useState } from "react";
import { assets } from "../../assets/app";
import { getProfileFormID } from "../../codes/api/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Profile";
    window.scrollTo(0, 0);
    document.title = "Skilly - Profile";
    getProfileFormID(setProfile, setName, setEmail, setCourses);
  }, []);
  return (
    <>
      <div className="profile">
        <div className="card">
          <div className="pimage">
            <img src={profile} alt="" />
          </div>
          <div className="name">{name}</div>
          <div className="email">
            <h1>Email:</h1> <p>{email}</p>
          </div>
        </div>
        <div className="courses">
          <div className="head">
            <div className="title">Your Courses</div>
            <FontAwesomeIcon
              icon={faPlus}
              size="2xl"
              onClick={() => {
                window.open("/addcourse", "_self");
              }}
            />
          </div>
          <div className="coursessection">
            {courses.map((value) => {
              return <Card3 item={value} key={value.id} />;
            })}
            {
              <Card3
                item={{
                  img: assets.add,
                  name: "Add Course",
                  courselink: "",
                }}
                key={-1}
              ></Card3>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
