import React from "react";
import Forgot from "../../views/forgotPass/forgotPass";
import Input from "../../components/input/input";

const EnterOTP = ({ otp, setotp, play, setPlay, setToast, setToastColor }) => {
  return (
    <Forgot
      heading="Enter OTP"
      para="Enter the OTP we have sent you on your Email"
      type="otp"
      data={otp}
      play={play}
      setPlay={setPlay}
      setToast={setToast}
      setToastColor={setToastColor}
    >
      <Input typ="number" placeholder="Enter OTP" setdata={setotp} />
    </Forgot>
  );
};

export default EnterOTP;
