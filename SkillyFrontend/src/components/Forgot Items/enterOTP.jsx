import React from "react";
import Forgot from "../../views/forgotPass/forgotPass";

const enterOTP = (otp, setotp) => {
  return (
    <Forgot
      heading="Enter OTP"
      para="Enter the OTP we have sent you on your Email"
      type="otp"
      data={otp}
    >
      <Input typ="number" placeholder="Enter OTP" setdata={setotp} />
    </Forgot>
  );
};

export default enterOTP;
