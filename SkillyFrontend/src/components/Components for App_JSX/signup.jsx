import React from "react";
import SignupLogin from "../../views/signup-login/signup-login";
import { assets } from "../../assets/app";
import Input from "../../components/input/input";

const SignUpM = ({
  details,
  setname,
  setemail,
  setpass,
  setConpass,
  setprofile,
  setPlay,
  play,
  setToast,
  setToastColor,
}) => {
  return (
    <>
      <SignupLogin
        type="signup"
        heading={"SignUp"}
        para={
          "To upload your top Channel Courses on the Site, Signup on this site"
        }
        buttonText={"SignUp"}
        btnlink={"/signup"}
        pic={assets.f3}
        details={details}
        setPlay={setPlay}
        play={play}
        setToast={setToast}
        setToastColor={setToastColor}
      >
        <Input typ="text" placeholder="Name" setdata={setname} />
        <Input typ="email" placeholder="Email" setdata={setemail} />
        <Input typ="password" placeholder="Password" setdata={setpass} />
        <Input
          typ="password"
          placeholder="Confirm Password"
          setdata={setConpass}
        />
        <div className="files">
          <label>Profile Picture</label>
          <input
            className="form-control"
            type="file"
            placeholder="Upload Profile"
            onChange={(e) => setprofile(e.target.files[0])}
          />
        </div>
      </SignupLogin>
    </>
  );
};

export default SignUpM;
