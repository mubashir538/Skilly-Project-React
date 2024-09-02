import React from "react";
import "./instructor.css";
import InstructorSection from "../../components/instructorsection/instructorsection";
import SearchBar from "../../components/searchbar/searchbar";
import { useEffect, useState } from "react";
import searchlogic from "../../codes/functions/searchLogic";
import { getCategories } from "../../codes/api/Categories";
import Card2 from "../../components/card2/card2";
import { assets } from "../../assets/app";

const Instructor = () => {
  const [search, setSearch] = useState("");
  const [cat, setcat] = useState([]);
  const [instructors, setinstructors] = useState([]);
  const [content, setContent] = useState(<></>);
  const [instructorCache, setInstructorCache] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Instructor";
    getCategories(setcat);
  }, []);

  useEffect(() => {
    if (search === "") {
      setContent(
        cat.map((item) => (
          <InstructorSection
            key={item.id}
            title={item.name}
            catid={item.id}
            setIns={setinstructors}
          />
        ))
      );
    } else {
      setContent(
        <div className="cardsins">
          {instructorCache.length === 0 ? (
            <div className="notFound">
              <img src={assets.seo_cat} alt="" />
              The Instructor You are Searching was not Found!
            </div>
          ) : (
            <></>
          )}
          {instructorCache.map((item) => (
            <Card2 key={item.id} details={item}></Card2>
          ))}
        </div>
      );
    }
  }, [instructors, cat, instructorCache]);

  return (
    <>
      <div className="page-title">Instructor</div>
      <div className="instructors">
        <SearchBar
          placeholder={"Search Instructor"}
          search={search}
          setSearch={setSearch}
          func={() => {
            searchlogic(search, instructors, setInstructorCache);
          }}
        />
        {content}
      </div>
    </>
  );
};

export default Instructor;
