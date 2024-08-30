import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Nabar/navbar";
import Footer from "./components/Footer/footer";
import "./App.css";
import SignupLogin from "./views/signup-login/signup-login";
import Instructor from "./views/instructor/instructor";
import Home from "./views/home/home";
import About from "./views/about/about";
import Courses from "./views/courses/courses";
import Profile from "./views/Profile/Profile";
import CourseDescription from "./views/CourseDescription/CourseDescription";
import Viewer from "./views/Viewer/Viewer";
import AddCourse from "./views/AddCourse/AddCourse";
import Category from "./views/category/category";
import axios from "axios";
import { Route, Routes, useLocation, Link, Navigate } from "react-router-dom";
import { assets } from "./assets/app";
import Input from "./components/input/input";
import Forgot from "./views/forgotPass/forgotPass";
function App() {
  const [pass, setpass] = useState("");
  const [otp,setotp] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [profile, setprofile] = useState(null);
  const [conpass, setConpass] = useState("");
  const location = useLocation();
  const [category, setcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [channelLink, setChannelLink] = useState("");
  const [teacher, setTeacher] = useState("");
  const [video, setVideo] = useState({});
  const [playlistlink, setPlaylistlink] = useState("");
  let details = {
    name: name,
    email: email,
    password: pass,
    profile: profile,
    conpass: conpass,
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/category/")
      .then((res) => {
        res.data.data.map((value) => {
          let cat = {
            id: value.id,
            name: value.name,
          };

          setcategory((prev) => [...prev, cat]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const shownavfoot =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!shownavfoot && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/signup"
          element={
            <SignupLogin
              type="signup"
              heading={"SignUp"}
              para={
                "To upload your top Chaneel Courses on the Site, SignUp on this site"
              }
              buttonText={"SignUp"}
              btnlink={"/signup"}
              pic={assets.f3}
              details={details}
            >
              <Input typ="text" placeholder="Name" setdata={setname} />
              <Input typ="email" placeholder="Email" setdata={setemail} />
              <Input typ="password" placeholder="Password" setdata={setpass} />
              <Input
                typ="password"
                placeholder="Confirm Password"
                setdata={setConpass}
              />
              <div className="files">
                <label>Profile Picture</label>
                <input
                  className="form-control"
                  type="file"
                  placeholder="Upload Profile"
                  onChange={(e) => setprofile(e.target.files[0])}
                />
              </div>
            </SignupLogin>
          }
        />
        <Route
          path="/login"
          element={
            <SignupLogin
              type="login"
              heading={"LOGIN"}
              para={"If your'e already a Member Sign In to get Started"}
              buttonText={"Login"}
              btnlink={"/login"}
              pic={assets.f2}
              details={details}
            >
              <Input typ="email" placeholder="Email" setdata={setemail} />
              <Input typ="password" placeholder="Password" setdata={setpass} />
            </SignupLogin>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/AddCourse"
          element={
            <AddCourse
              type={"add"}
              heading={"Add Course"}
              btnText={"Upload"}
              courseName={courseName}
              teacher={teacher}
              channelLink={channelLink}
              playlistlink={playlistlink}
              Category={selectedCategory}
            >
              <Input
                typ="text"
                placeholder="Course Name"
                setdata={setCourseName}
              />
              <div className="menu">
                <div className="item">
                  <Link href="#" className="link">
                    <span>
                      {" "}
                      {selectedCategory[1] !== undefined
                        ? selectedCategory[1]
                        : "Category"}{" "}
                    </span>
                    <svg viewBox="0 0 360 360" xmlSpace="preserve">
                      <g id="SVGRepo_iconCarrier">
                        <path
                          id="XMLID_225_"
                          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                  <div className="submenu">
                    {category.map((value, index) => (
                      <div className="submenu-item" key={index}>
                        <a
                          href="#"
                          className="submenu-link"
                          onClick={() =>
                            setSelectedCategory([value.id, value.name])
                          }
                        >
                          {value.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Input
                typ="text"
                placeholder="Course Link"
                setdata={setPlaylistlink}
              />
              <Input
                typ="text"
                placeholder="Instructor Name"
                setdata={setTeacher}
              />
              <Input
                typ="text"
                placeholder="Channel Link"
                setdata={setChannelLink}
              />
            </AddCourse>
          }
        />
        <Route path="/Viewer" element={<Viewer video={video} />} />
        <Route
          path="/CourseDescription/:id"
          element={<CourseDescription setVideo={setVideo} />}
        />
        <Route
          path="/forgot"
          element={
            <Forgot
              heading="Forgot Password"
              para="Enter your email and we will send you a link to reset your password"
            type="forgot"
            >
              <Input typ="email" placeholder="Email" setdata={setemail} />
            </Forgot>
          }
        />
        <Route
          path="/otp"
          element={
            <Forgot
              heading="Enter OTP"
              para="Enter the OTP we have sent you on your Email"
              type="otp"
            >
              <Input typ="number" placeholder="Enter OTP" setdata={setotp} />
            </Forgot>
          }
        />
        <Route
          path="/forgotpass"
          element={
            <Forgot
              heading="New Password"
              para="Enter a New Password to Continue"
              type="newpass"
            >
              <Input
                typ="password"
                placeholder="New Password"
                setdata={setpass}
              />
              <Input
                typ="password"
                placeholder="Confirm Password"
                setdata={setConpass}
              />
            </Forgot>
          }
        />
      </Routes>
      {!shownavfoot && <Footer />}
    </>
  );
}

export default App;
