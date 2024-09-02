import Cookies from "js-cookie";
import signupAPI from "../api/signup";

import {
  ValidateConfirmPassword,
  ValidateEmail,
  ValidatePassword,
  ValidateName,
} from "./validations";
import axios from "axios";
import { setCookie } from "./Cookie";

const handleSignup = async (setToast, details, navigate, setColor) => {
  let name = ValidateName(details.name);
  if (name.status === false) {
    setToast(name.message);
    return;
  }
  let val = ValidateEmail(details.email);

  if (val === false) {
    setToast("Enter Valid Email");
    return;
  }
  let pass = ValidatePassword(details.password);

  if (pass.status === false) {
    setToast(pass.message);
    return;
  }
  let conpass = ValidateConfirmPassword(details.password, details.conpass);
  if (conpass.status === false) {
    setToast(conpass.message);
    return;
  }
  if (details.profile == null) {
    setToast("Please Upload a Image");
    return;
  }

  if (
    details.profile.type !== "image/png" &&
    details.profile.type !== "image/jpeg" &&
    details.profile.type !== "image/jpg"
  ) {
    setToast("Only .png or .jpg formats are Allowed");
    return;
  }

  const formData = new FormData();
  formData.append("name", details.name);
  formData.append("email", details.email);
  formData.append("password", details.password);
  formData.append("profile", details.profile);

  const response = await signupAPI(formData);
  if ("refresh" in response.data) {
    setToast("Signup Successful! Please Login to Continue");
    setColor("#80ed99");
    setTimeout(() => {
      navigate("/login");
      setColor("#EF233C");
    }, 2000);
  }
  if ("error" in response.data) {
    setToast("This Email Already Exists!");
    return;
  }
};

const handleLogin = async (details, setToast, navigate, setColor) => {
  let email = ValidateEmail(details.email);
  if (email === false) {
    setToast("Enter Valid Email");
    return;
  }

  let pass = ValidatePassword(details.password);
  if (pass.status === false) {
    if (pass.message != "Password should be atleast 8 characters long") {
      setToast(pass.message);
      return;
    }
  }

  setToast("");
  const data = {
    email: details.email,
    password: details.password,
  };
  try {
    const response = await axios.post("http://127.0.0.1:8000/login/", data);
    if ("error" in response.data) {
      setToast("Login Failed, Invalid Credentials");
    }
    if ("success" in response.data) {
      setToast("Login Successful");
      setColor("#80ed99");
      setTimeout(() => {
        setColor("#EF233C");
      }, 4000);
      setCookie(response);
      navigate("/home");
    }
  } catch (err) {
    console.log(err);
  }
};

export { handleSignup, handleLogin };
