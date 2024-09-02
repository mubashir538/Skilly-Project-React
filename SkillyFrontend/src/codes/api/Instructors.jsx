import axios from "axios";
import { getUserfromID } from "./User";

const getInstructors = (setItems) => {
  axios
    .get("http://127.0.0.1:8000/instructor")
    .then((res) => {
      let data = res.data.data;
      data.map((value, index) => {
        if (index < 4) {
          let ins = {
            id: value.id,
            instructor: value.instructor,
            instructorprofile: value.instructorprofile,
            channelAbout: value.channelAbout,
          };
          setItems((prev) => [...prev, ins]);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInstructorsfromCat = (setIns, setInstructor, catid) => {
  axios.get(`http://127.0.0.1:8000/instructor/${catid}`).then((res) => {
    let data = res.data.data;
    data.map((value) => {
      let ins = {
        id: value.id,
        instructor: value.instructor,
        channelName: value.channelName,
        channelLink: value.channelLink,
        categoryid: value.categoryid,
        instructorprofile: value.instructorprofile,
        channelAbout: value.channelAbout,
      };
      setIns((prev) => [...prev, ins]);
      setInstructor((prev) => [...prev, ins]);
    });
  });
};

const getInstructorfromID = (val, setData, course) => {
  let id;
  if (val.Instructorid !== undefined) {
    id = val.Instructorid;
  }
  else{
    id = val
  }
  axios
    .get(`http://127.0.0.1:8000/instructorfromid/${id}`)
    .then((res) => {
      let instructor = {
        instructor: res.data.data.instructor,
        channelName: res.data.data.channelName,
        channelLink: res.data.data.channelLink.replace(/\s+/,""),
        categoryid: res.data.data.categoryid,
        instructorprofile: res.data.data.instructorprofile,
        channelAbout: res.data.data.channelAbout,
      };
      let allitems = instructor;
      if (course !== undefined) {
        allitems = { ...course, ...instructor };

        if (val.user !== undefined) {
          getUserfromID(val, setData, allitems);
        }
      }

      setData(allitems);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getInstructors, getInstructorsfromCat, getInstructorfromID };
