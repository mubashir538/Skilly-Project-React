import React, { useEffect } from "react";
import "./forgotPass.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonAbt from "../../components/button/button";
import {
  ValidateConfirmPassword,
  ValidateEmail,
  ValidatePassword,
} from "../../codes/functions/validations";

const Forgot = ({
  heading,
  para,
  children,
  type,
  data,
  play,
  setPlay,
  setToast,
  setToastColor,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  let email, otp;
  useEffect(() => {
    if (type === "otp") {
      otp = location.state.otp;
      email = location.state.email;
    }
  }, []);

  const sendemail = async (data, otp) => {
    let response = await axios.post("http://127.0.0.1:8000/sendotp/", {
      email: data,
      otp: otp,
    });
    if (response.data.status === 200) {
      setPlay(true);
      setToastColor("#10B981");
      setToast("OTP Sent Successfully");
    } else {
      setPlay(true);
      setToast("Error Sending OTP,Please Try Again Later!");
      setToastColor("#EF233C");
    }
  };

  const handleEmail = async () => {
    let valid = ValidateEmail(data);
    if (!valid) {
      setPlay(true);
      setToast("Invalid Email Address");
      setToastColor("#EF233C");
      return;
    }
    const response = await axios.post(`http://127.0.0.1:8000/searchuser/`, {
      email: data,
    });
    if (response.data.data === true) {
      let otp = Math.floor(100000 + Math.random() * 900000);
      sendemail(data, otp);
      navigate("/otp", { state: { email: data, otp: otp } });
    } else {
      setPlay(true);
      setToast("Invalid Email Address");
      setToastColor("#EF233C");
    }
  };

  const handleotp = () => {
    if (data != location.state.otp) {
      setPlay(true);
      setToast("Invalid Email Address");
      setToastColor("#EF233C");
    } else {
      navigate("/forgotpass", { state: { email: location.state.email } });
    }
  };

  const handlePassword = async () => {
    let password = ValidatePassword(data[0]);
    if (!password.status) {
      setPlay(true);
      setToast(password.message);
      setToastColor("#EF233C");
      return;
    }
    let confirm = ValidateConfirmPassword(data[0], data[1]);
    if (!confirm.status) {
      setPlay(true);
      setToast(confirm.message);
      setToastColor("#EF233C");
      return;
    }

    if (data[0] === data[1]) {
      const response = await axios.post(
        `http://127.0.0.1:8000/changePassword/`,
        {
          password: data[0],
          email: location.state.email,
        }
      );
      if (response.data.status == 200) {
        setPlay(true);
        setToast("Password Changed Successfully");
        setToastColor("#10B981");
        navigate("/login");
      } else {
        setPlay(true);
        setToast("Error Changing Password");
        setToastColor("#EF233C");
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
            {type === "otp" ? (
              <p
                onClick={() => {
                  sendemail(email, otp);
                }}
              >
                Resend Email
              </p>
            ) : (
              <></>
            )}
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
