import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Nabar/navbar";
import Footer from "./components/Footer/footer";
import "./App.css";
import Instructor from "./views/instructor/instructor";
import Home from "./views/home/home";
import About from "./views/about/about";
import Courses from "./views/courses/courses";
import Profile from "./views/Profile/Profile";
import CourseDescription from "./views/CourseDescription/CourseDescription";
import Viewer from "./views/Viewer/Viewer";
import Category from "./views/category/category";
import axios from "axios";
import { Route, Routes, useLocation, Link, Navigate } from "react-router-dom";
import Input from "./components/input/input";
import SignUpM from "./components/Components for App_JSX/signup";
import Login from "./components/Components for App_JSX/login";
import AddCourseM from "./components/Components for App_JSX/AddCourseM";
import enterNewPass from "./components/Forgot Items/enterNewPass";
import enterOTP from "./components/Forgot Items/enterOTP";
import enterEmail from "./components/Forgot Items/enterEmail";
import showCategoryMenu from "./codes/api/showCategoryMenu";
import Toast from "./components/toast/toast";

function App() {
  const [pass, setpass] = useState("");
  const [otp, setotp] = useState("");
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
  const [play, setPlay] = useState(false);
  let details = {
    name: name,
    email: email,
    password: pass,
    profile: profile,
    conpass: conpass,
  };

  useEffect(() => {
    showCategoryMenu(setcategory);
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
            <SignUpM
              details={details}
              setname={setname}
              setemail={setemail}
              setpass={setpass}
              setConpass={setConpass}
              setprofile={setprofile}
              setPlay={setPlay}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login details={details} setemail={setemail} setpass={setpass} />
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
            <AddCourseM
              courseName={courseName}
              teacher={teacher}
              channelLink={channelLink}
              playlistlink={playlistlink}
              selectedCategory={selectedCategory}
              setCourseName={setCourseName}
              setPlaylistlink={setPlaylistlink}
              setChannelLink={setChannelLink}
              setTeacher={setTeacher}
            />
          }
        />
        <Route path="/Viewer" element={<Viewer video={video} />} />
        <Route
          path="/CourseDescription/:id"
          element={<CourseDescription setVideo={setVideo} />}
        />
        <Route
          path="/forgot"
          element={<enterEmail email={email} setemail={setemail} />}
        />
        <Route path="/otp" element={<enterOTP otp={otp} setotp={setotp} />} />
        <Route
          path="/forgotpass"
          element={
            <enterNewPass
              pass={pass}
              conpass={conpass}
              setpass={setpass}
              setConpass={setConpass}
            />
          }
        />
      </Routes>
      {/* <Toast message="Testing..." play={play} setPlay={setPlay}></Toast> */}

      {!shownavfoot && <Footer />}
    </>
  );
}

export default App;
