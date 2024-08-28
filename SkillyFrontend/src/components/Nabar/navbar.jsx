import React, { useState, useEffect } from "react";
import "./navbar.css";
import { assets } from "../../assets/app";
import { useNavigate, Link, useLocation } from "react-router-dom";
import temp from "../../assets/fa.jpg";
import Cookies from "js-cookie";
import axios from "axios";

export const Navbar = () => {
  const [page, setpage] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getImage();

  }, []);

  const changePages = (path) => {
    setpage(path);
    console.log(path);
  };

  const handlelogout = () => {
    localStorage.clear();
    Cookies.remove("refresh_token");
    Cookies.remove("user");
    Cookies.remove("access_token");
    window.open("/login", "_self");
  };

  const getImage = () => {
    console.log(Cookies.get("user"));
    if (Cookies.get("user") != null) {
      let user = Cookies.get("user");
      let values = user.split(",");
      let profile = values[4];
      let image = profile.split('"')[3];
      setProfile("http://127.0.0.1:8000" + image);
    } else {
      setProfile(assets.displaypic);
    }
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
          <span className="icon">
            <svg viewBox="0 0 175 80" width="40" height="40">
              <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            </svg>
          </span>

          <span className="text">MENU</span>
        </button>

        <div className="align">
          <div className="nav-items collapse navbar-collapse" id="navbarText">
            <ul>
              <li
                className={location.pathname === "/home" ? "selected" : ""}
                onClick={() => changePages("home")}
              >
                <Link to="/home"> Home</Link>
              </li>
              <li
                onClick={() => changePages("category")}
                className={location.pathname === "/category" ? "selected" : ""}
              >
                <Link to="/category">Categories</Link>
              </li>
              <li
                onClick={() => changePages("instructor")}
                className={
                  location.pathname === "/instructor" ? "selected" : ""
                }
              >
                <Link to="/instructor">Instructors</Link>
              </li>
              <li
                onClick={() => changePages("courses")}
                className={location.pathname === "/courses" ? "selected" : ""}
              >
                <Link to="/courses">Courses</Link>
              </li>
              <li
                onClick={() => changePages("about")}
                className={location.pathname === "/about" ? "selected" : ""}
              >
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="logout">
            <img
              src={profile}
              alt=""
              className=" dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />

            <ul className="dropdown-menu">
              {Cookies.get("refresh_token") == null ? (
                <>
                  <li>
                    <Link className="dropdown-item" to={"/signup"}>
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/login"}>
                      LogIn
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to={"/profile"}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => handlelogout()}
                    >
                      Log Out
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
