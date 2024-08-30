import React from "react";
import SignupLogin from "../../views/signup-login/signup-login";
import { assets } from "../../assets/app";
import Input from "../../components/input/input";

const Login = (details, setemail, setpass) => {
  
  return (
    <SignupLogin
      type="login"
      heading={"LOGIN"}
      para={"If your'e already a Member Sign In to get Started"}
      buttonText={"Login"}
      btnlink={"/login"}
      pic={assets.f2}
      details={details}
    >
      <Input typ="email" placeholder="Email" setdata={setemail} />
      <Input typ="password" placeholder="Password" setdata={setpass} />
    </SignupLogin>
  );
};

export default Login;
