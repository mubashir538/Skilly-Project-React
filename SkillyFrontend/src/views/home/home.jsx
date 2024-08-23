import React from "react";
import { assets } from "../../assets/app";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="title">
          <div className="t1">Free Skill Learning Platform</div>
          <div className="t2">
            Learn Easily From the Biggest Library of Courses
          </div>
          <div className="t3">
            Skilly helps you to learn any skill from the world-class Educators
            on Youtube and to earn a great Job with new skilset
          </div>
          <div className="btns">
            <button className="btn1">
              <span>Get Started</span>
            </button>
            <button className="btn2">Learn More</button>
          </div>
        </div>
        <div className="image">
          <img src={assets.hompage_title} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
