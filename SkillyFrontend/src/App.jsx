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
import { Route, Routes, useLocation, Link, Navigate } from "react-router-dom";
import SignUpM from "./components/Components for App_JSX/signup";
import Login from "./components/Components for App_JSX/login";
import AddCourseM from "./components/Components for App_JSX/AddCourseM";
import { showCategoryMenu } from "./codes/api/Categories";
import Toast from "./components/toast/toast";
import EditCourseM from "./components/Components for App_JSX/EditCourseM";
import EnterEmail from "./components/Forgot Items/enterEmail";
import EnterNewPass from "./components/Forgot Items/enterNewPass";
import EnterOTP from "./components/Forgot Items/enterOTP";

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
  const [toast, setToast] = useState("");
  const [toastColor, setToastColor] = useState("#EF233C");
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
              play={play}
              setPlay={setPlay}
              setToastColor={setToastColor}
              setToast={setToast}
            />
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login
                details={details}
                setemail={setemail}
                setpass={setpass}
                play={play}
                setPlay={setPlay}
                setToastColor={setToastColor}
                setToast={setToast}
              />
            </>
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
              category={category}
              setSelectedCategory={setSelectedCategory}
              play={play}
              setPlay={setPlay}
              setToastColor={setToastColor}
              setToast={setToast}
            />
          }
        />
        <Route
          path="/editcourse"
          element={
            <EditCourseM
              play={play}
              setPlay={setPlay}
              setToastColor={setToastColor}
              setToast={setToast}
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
          element={
            <EnterEmail
              email={email}
              setemail={setemail}
              play={play}
              setPlay={setPlay}
              setToastColor={setToastColor}
              setToast={setToast}
            />
          }
        />
        <Route
          path="/otp"
          element={
            <EnterOTP
              otp={otp}
              setotp={setotp}
              play={play}
              setPlay={setPlay}
              setToastColor={setToastColor}
              setToast={setToast}
            />
          }
        />
        <Route
          path="/forgotpass"
          element={
            <EnterNewPass
              pass={pass}
              conpass={conpass}
              setpass={setpass}
              setConpass={setConpass}
              play={play}
              setPlay={setPlay}
              setToastColor={setToastColor}
              setToast={setToast}
            />
          }
        />
      </Routes>
      <Toast
        message={toast}
        play={play}
        setPlay={setPlay}
        color={toastColor}
      ></Toast>

      {!shownavfoot && <Footer />}
    </>
  );
}

export default App;
