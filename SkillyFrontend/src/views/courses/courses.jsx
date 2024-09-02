import React from "react";
import "./courses.css";
import SearchBar from "../../components/searchbar/searchbar";
import Card3 from "../../components/card3/card3";
import { useEffect, useState } from "react";
import { getCourses } from "../../codes/api/Courses";
import searchlogic from "../../codes/functions/searchLogic";
import { assets } from "../../assets/app";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState(<></>);
  const [courseCache, setCourseCache] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Courses";
    setCourses([]);
    getCourses(setCourses);
  }, []);

  useEffect(() => {
    if (search === "") {
      setContent(
        courses.map((item) => <Card3 key={item.id} item={item}></Card3>)
      );
    } else {
      if (courseCache.length === 0) {
        setContent(
          <>
            <div className="notFound">
              <img src={assets.seo_cat} alt="" />
              The Course you are Searching was not Found!
            </div>
          </>
        );
      } else {
        setContent(
          courseCache.map((item) => <Card3 key={item.id} item={item}></Card3>)
        );
      }
    }
  }, [courses, courseCache]);

  return (
    <>
      <div className="page-title">Courses</div>
      <SearchBar
        placeholder={"Search Course"}
        search={search}
        setSearch={setSearch}
        func={() => {
          searchlogic(search, courses, setCourseCache);
        }}
      ></SearchBar>
      <div className="coursessection">{content}</div>
    </>
  );
};

export default Courses;
