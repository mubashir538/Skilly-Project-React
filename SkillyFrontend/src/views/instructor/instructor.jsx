import React from "react";
import "./instructor.css";
import InstructorSection from "../../components/instructorsection/instructorsection";
import SearchBar from "../../components/searchbar/searchbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Instructor = () => {
  const [cat, setcat] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/category")
      .then((res) => {
        let data = res.data.data;
        data.map((value) => {
          let cat = {
            id: value.id,
            name: value.name,
          };
          setcat((prev) => [...prev, cat]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <>
      <div className="page-title">Instructor</div>
      <div className="instructors">
        <SearchBar placeholder={"Search Instructor"} />
        {cat.map((item) => (
          <InstructorSection key={item.id} title={item.name} catid={item.id} />
        ))}
      </div>
    </>
  );
};

export default Instructor;
