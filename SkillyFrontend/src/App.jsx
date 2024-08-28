import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
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
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { assets } from "./assets/app";
import Input from "./components/input/input";

function App() {
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [profile, setprofile] = useState(null);
  const [conpass, setConpass] = useState("");
  const location = useLocation();

  let details = {
    name: name,
    email: email,
    password: pass,
    profile: profile,
    conpass: conpass,
  };
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
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/Viewer" element={<Viewer />} />
        <Route path="/CourseDescription" element={<CourseDescription />} />
      </Routes>
      {!shownavfoot && <Footer />}
    </>
  );
}

export default App;
