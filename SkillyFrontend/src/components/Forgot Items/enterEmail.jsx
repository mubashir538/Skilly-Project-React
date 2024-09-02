import React from "react";
import Forgot from "../../views/forgotPass/forgotPass";
import Input from "../../components/input/input";

const EnterEmail = ({
  email,
  setemail,
  play,
  setPlay,
  setToast,
  setToastColor,
}) => {
  return (
    <Forgot
      heading="Forgot Password"
      para="Enter your email and we will send you a link to reset your password"
      type="forgot"
      data={email}
      play={play}
      setPlay={setPlay}
      setToast={setToast}
      setToastColor={setToastColor}
    >
      <Input typ="email" placeholder="Email" setdata={setemail} />
    </Forgot>
  );
};

export default EnterEmail;
