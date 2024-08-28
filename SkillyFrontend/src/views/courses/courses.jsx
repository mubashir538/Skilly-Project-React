import React from "react";
import "./courses.css";
import SearchBar from "../../components/searchbar/searchbar";
import Card3 from "../../components/card3/card3";
import { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Courses";
    axios
      .get("http://127.0.0.1:8000/course")
      .then((res) => {
        let data = res.data.data;
        data.map((value) => {
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
      <div className="page-title">Courses</div>
      <SearchBar placeholder={"Search Course"}></SearchBar>
      <div className="coursessection">
        {courses.map((item) => (
          <Card3 key={item.id} item={item}></Card3>
        ))}
      </div>
    </>
  );
};

export default Courses;
