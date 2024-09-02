import React, { Children, useEffect } from "react";
import "./signup-login.css";
import Input from "../../components/input/input";
import { assets } from "../../assets/app";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import ButtonAbt from "../../components/button/button";
import Toast from "../../components/toast/toast";
import {
  handleLogin,
  handleSignup,
} from "../../codes/functions/handleSignUp-Login";
import GoogleButton from "../../components/googleButton/googleButton";

const Signup = ({
  type,
  heading,
  para,
  buttonText,
  btnlink,
  setToastColor,
  setToast,
  pic,
  children,
  play,
  setPlay,
  details,
}) => {
  const navigate = useNavigate();
  // const [error, seterror] = useState("");
  // const [toast, setToast] = useState(false);
  // const [toastColor, setToastColor] = useState("#EF233C");

  useEffect(() => {
    window.scrollTo(0, 0);
    type === "signup"
      ? (document.title = "Skilly - SignUp")
      : (document.title = "Skilly - Login");
      setToast("")
  }, [location.pathname]);

  let text = (
    <>
      {" "}
      <div className="form">
        <h1>{heading}</h1>
        <p>{para}</p>
        <div className="inputs">
          {children}
          {type === "login" ? (
            <p className="fgot" onClick={() => navigate("/forgot")}>
              Forgot Password
            </p>
          ) : (
            <></>
          )}
          <div className="buttons">
            <ButtonAbt
              text={buttonText}
              click={() => {
                {
                  type === "signup" ? handleSign() : handleLog();
                }
              }}
              color="#EF233C"
            />
            <GoogleButton />
          </div>
        </div>
      </div>
    </>
  );
  let image = (
    <>
      {" "}
      <div className="image">
        <img src={pic} alt="" />
        <p>
          {type === "signup" ? (
            <>
              Already a Member? <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              Not Part of the Community? <Link to={"/signup"}>Signup</Link>
            </>
          )}
        </p>
      </div>
    </>
  );
  let login = (
    <>
      {text}
      {image}
    </>
  );
  let signup = (
    <>
      {image} {text}
    </>
  );
  const handleSign = () => {
    handleSignup(setToast, details, navigate, setToastColor);
    setPlay(true);
  };

  const handleLog = () => {
    setPlay(true);
    handleLogin(details, setToast, navigate, setToastColor);
  };
  return (
    <>
      <div className="body">
        <div className="card">{type === "login" ? login : signup}</div>
      </div>
      {/* <Toast message={error} play={play} setPlay={setPlay} color={toastColor} /> */}
    </>
  );
};

export default Signup;
