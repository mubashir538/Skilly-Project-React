import Cookies from "js-cookie";
import signupAPI from "../api/signup";

import {
  ValidateConfirmPassword,
  ValidateEmail,
  ValidatePassword,
  ValidateName,
} from "./validations";
import axios from "axios";
import setCookie from "../setCookie";

const handleSignup = async (
  setToast,
  seterror,
  details,
  navigate,
  setColor
) => {
  setToast(true);
  let name = ValidateName(details.name);
  if (name.status === false) {
    seterror(name.message);
    return;
  }
  let val = ValidateEmail(details.email);
  
  if (val === false) {
    seterror("Enter Valid Email");
    return;
  }
  let pass = ValidatePassword(details.password);
  
  if (pass.status === false) {
    seterror(pass.message);
    return;
  }
  let conpass = ValidateConfirmPassword(details.password, details.conpass);
  if (conpass.status === false) {
    seterror(conpass.message);
    return;
  }
  if (details.profile == null) {
    seterror("Please Upload a Image");
    return;
  }

  if (
    details.profile.type !== "image/png" &&
    details.profile.type !== "image/jpeg" &&
    details.profile.type !== "image/jpg"
  ) {
    seterror("Only .png or .jpg formats are Allowed");
    return;
  }

  const formData = new FormData();
  formData.append("name", details.name);
  formData.append("email", details.email);
  formData.append("password", details.password);
  formData.append("profile", details.profile);

  const response = await signupAPI(formData);
  if ("refresh" in response.data) {
    seterror("Signup Successful! Please Login to Continue");
    setColor("#80ed99");
     setTimeout(() => {
      navigate("/login");
    setColor("#EF233C");
    }, 2000);
    
  }
  if ("error" in response.data) {
    seterror("This Email Already Exists!");
    return;
  }
};

const handleLogin = async () => {
  seterror(<></>);
  const data = {
    email: details.email,
    password: details.password,
  };
  try {
    const response = await axios.post("http://127.0.0.1:8000/login/", data);
    if ("error" in response.data) {
      seterror(
        <>
          <p
            style={{
              color: "#EF233C",
              fontFamily: ["montserrat", "sans-serif"],
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {response.data.error}
          </p>
        </>
      );
    }
    if ("success" in response.data) {
      setCookie(response);
      navigate("/home");
    }
  } catch (err) {
    console.log(err);
  }
};

export { handleSignup, handleLogin };
