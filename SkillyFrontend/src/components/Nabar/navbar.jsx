import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/app";
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  const [page, setpage] = useState("home");

  const changePages = (path) => {
    setpage(path);
    console.log(path);
  };

  return (
    <>
      <div className="container-fluid navbar navbar-expand-md">
        <div className="logo">
          <img src={assets.logo_small} alt="" />
        </div>
        <button
          className="btn navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icon">
            <svg viewBox="0 0 175 80" width="40" height="40">
              <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            </svg>
          </span>

          <span class="text">MENU</span>
        </button>
        <div className="nav-items collapse navbar-collapse" id="navbarText">
          <ul>
            <li
              className={page == "home" ? "selected" : ""}
              onClick={() => changePages("home")}
            >
              <Link to="/home"> Home</Link>
            </li>
            <li
              onClick={() => changePages("category")}
              className={page === "category" ? "selected" : ""}
            >
              <Link to="/category">Categories</Link>
            </li>
            <li
              onClick={() => changePages("instructor")}
              className={page === "instructor" ? "selected" : ""}
            >
              <Link to="/instructor">Instructors</Link>
            </li>
            <li
              onClick={() => changePages("courses")}
              className={page === "courses" ? "selected" : ""}
            >
              <Link to="/courses">Courses</Link>
            </li>
            <li
              onClick={() => changePages("about")}
              className={page === "about" ? "selected" : ""}
            >
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
