import React, { useEffect } from "react";
import "./forgotPass.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonAbt from "../../components/button/button";

const Forgot = ({ heading, para, children, type, data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (type === "otp") {
      let otp = location.state.otp;
      let email = location.state.email;
    }
  }, []);
  console.log(type);

  const handleEmail = async () => {
    const response = await axios.post(`http://127.0.0.1:8000/searchuser/`, {
      email: data,
    });
    if (response.data.data === true) {
      let otp = Math.floor(100000 + Math.random() * 900000);
      const sendemail = async () => {
        console.log("in mail");
        let response = await axios.post("http://127.0.0.1:8000/sendotp/", {
          email: data,
          otp: otp,
        });
        if (response.data.status === 200) {
          alert("The Email has been Sent to Your Account");
        } else {
          alert("Error Sending Your Email, please Try Again Later...");
        }
      };
      sendemail();
      navigate("/otp", { state: { email: data, otp: otp } });
    } else {
      alert("Invalid Email Address");
    }
  };

  const handleotp = () => {
    if (data != location.state.otp) {
      alert("Invalid OTP");
    } else {
      navigate("/forgotpass", { state: { email: location.state.email } });
    }
    //
  };

  const handlePassword = async () => {
    console.log(location.state);
    if (data[0] === data[1]) {
      const response = await axios.post(
        `http://127.0.0.1:8000/changePassword/`,
        {
          password: data[0],
          email: location.state.email,
        }
      );
      console.log(response.data);
      if (response.data.status == 200) {
        alert("Password Changed Successfully");
        navigate("/login");
      } else {
        alert("Error Changing Password");
      }
    } else {
      alert("Password and Confirm Password Should be same!");
    }
  };

  let handleFunction = () => {
    return;
  };
  if (type === "forgot") {
    handleFunction = handleEmail;
  }
  if (type === "otp") {
    handleFunction = handleotp;
  }
  if (type === "newpass") {
    handleFunction = handlePassword;
  }

  return (
    <>
      <div className="screen">
        <div className="card">
          <div className="heading">{heading}</div>
          <div className="para">{para}</div>
          <div className="inputs">
            {children}
            {type === "otp" ? <p>Resend Email</p> : <></>}
            <ButtonAbt
              text={type === "forgot" ? "Send" : "Verify"}
              click={() => handleFunction()}
              color="#EF233C"
            ></ButtonAbt>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
