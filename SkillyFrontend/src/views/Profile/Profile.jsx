import React from "react";
import "./Profile.css";
import Card3 from "../../components/card3/card3";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { assets } from "../../assets/app";

const Profile = () => {
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Profile";
    let userid = Cookies.get("user").split('"')[2].split(":")[1].split(",")[0];
    console.log(userid);
    window.scrollTo(0, 0);
    document.title = "Skilly - Profile";
    axios
      .get("http://127.0.0.1:8000/profile/" + userid)
      .then((res) => {
        setProfile("http://127.0.0.1:8000/" + res.data.user.profile);
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        res.data.courses.map((value) => {
          let course = {
            id: value.id,
            name: value.name,
            desc: value.description,
            img: value.image,
            catid: value.categoryid,
            insid: value.Instructorid,
            courselink: value.courselink,
          };
          setCourses((prev) => [...prev, course]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
