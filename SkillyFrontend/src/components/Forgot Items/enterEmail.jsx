import React from "react";
import Forgot from "../../views/forgotPass/forgotPass";

const enterEmail = (email, setemail) => {
  return (
    <Forgot
      heading="Forgot Password"
      para="Enter your email and we will send you a link to reset your password"
      type="forgot"
      data={email}
    >
      <Input typ="email" placeholder="Email" setdata={setemail} />
    </Forgot>
  );
};

export default enterEmail;
