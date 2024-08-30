import React from "react";
import Forgot from "../../views/forgotPass/forgotPass";

const enterNewPass = (pass,conpass,setpass,setConpass) => {
  return (
    <Forgot
      heading="New Password"
      para="Enter a New Password to Continue"
      type="newpass"
      data={[pass, conpass]}
    >
      <Input typ="password" placeholder="New Password" setdata={setpass} />
      <Input
        typ="password"
        placeholder="Confirm Password"
        setdata={setConpass}
      />
    </Forgot>
  );
};

export default enterNewPass;
