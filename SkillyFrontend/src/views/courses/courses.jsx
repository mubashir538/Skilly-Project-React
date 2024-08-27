import React from "react";
import "./courses.css";
import SearchBar from "../../components/searchbar/searchbar";
import Card3 from "../../components/card3/card3";

const Courses = () => {
  return (
    <>
      <div className="page-title">Courses</div>
      <SearchBar placeholder={"Search Course"}></SearchBar>
      <div className="coursessection">
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
        <Card3></Card3>
      </div>
    </>
  );
};

export default Courses;
