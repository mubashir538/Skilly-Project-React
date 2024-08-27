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
import Category from "./views/category/category";
import { Route, Routes, useLocation } from "react-router-dom";
import { assets } from "./assets/app";
import Input from "./components/input/input";

function App() {
  const location = useLocation();

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
            >
              <Input typ="text" placeholder="Name" />
              <Input typ="email" placeholder="Email" />
              <Input typ="password" placeholder="Password" />
              <Input typ="password" placeholder="Confirm Password" />
              <div className="files">
                <label>Profile Picture</label>
                <input
                  className="form-control"
                  type="file"
                  placeholder="Upload Profile"
                />
              </div>
            </SignupLogin>
          }
        />
        <Route path="/login" element={<SignupLogin
              type="login"
              heading={"LOGIN"}
              para={
                "If your'e already a Member Sign In to get Started"
              }
              buttonText={"Login"}
              btnlink={"/login"}
              pic={assets.f2}
            >
              <Input typ="email" placeholder="Email" />
              <Input typ="password" placeholder="Password" />
            </SignupLogin>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructor" element={<Instructor />} />
      </Routes>
      {!shownavfoot && <Footer />}
    </>
  );
}

export default App;
