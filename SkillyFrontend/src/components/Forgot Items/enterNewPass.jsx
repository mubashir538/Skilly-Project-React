import React from "react";
import Forgot from "../../views/forgotPass/forgotPass";
import Input from "../../components/input/input";

const EnterNewPass = ({pass,conpass,setpass,setConpass,play,setPlay,setToast,setToastColor}) => {
  return (
    <Forgot
      heading="New Password"
      para="Enter a New Password to Continue"
      type="newpass"
      data={[pass, conpass]}
      play={play}
      setPlay={setPlay}
      setToast={setToast}
      setToastColor={setToastColor}
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

export default EnterNewPass;
