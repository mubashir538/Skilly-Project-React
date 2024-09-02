import axios from "axios";
import { getUserIDfromCookie } from "../functions/Cookie";

const getUserfromID = (val, setData, allitems) => {
  axios
    .get(`http://127.0.0.1:8000/user/${val.user}`)
    .then((res) => {
      let user = {
        username: res.data.data.name,
        userprofile: res.data.data.profile,
      };
      let withuser = { ...allitems, ...user };
      setData(withuser);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProfileFormID = (setProfile, setName, setEmail, setCourses) => {
  let userid = getUserIDfromCookie();

  axios
    .get("http://127.0.0.1:8000/profile/" + userid)
    .then((res) => {
      setProfile("http://127.0.0.1:8000/" + res.data.user.profile);
      setName(res.data.user.name);
      setEmail(res.data.user.email);
      res.data.courses.map((value) => {
        let course = {
          id: value.id,
          name: value.name,
          desc: value.description,
          img: value.image,
          catid: value.categoryid,
          insid: value.Instructorid,
          courselink: value.courselink,
        };
        setCourses((prev) => [...prev, course]);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getUserfromID, getProfileFormID };
