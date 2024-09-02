import axios from "axios";
import { getInstructorfromID } from "./Instructors";

const getCourses = (setItems, setCourseCache, itemsize) => {
  axios
    .get("http://127.0.0.1:8000/course")
    .then((res) => {
      let data = res.data.data;
      data.map((value, index) => {
        if (itemsize === undefined) {
          itemsize = data.length;
        }
        if (index < itemsize) {
          let course = {
            id: value.id,
            name: value.name,
            desc: value.description,
            img: value.image,
            catid: value.categoryid,
            insid: value.Instructorid,
            courselink: value.courselink,
          };
          setItems((prev) => [...prev, course]);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCourseDescription = async (id, setData) => {
  const response1 = await axios
    .get(`http://127.0.0.1:8000/courseid/${id}`)
    .then((res) => {
      let val = res.data.data;
      let course = {
        id: val.id,
        name: val.name,
        description: val.description,
        image: val.image,
        Instructorid: val.Instructorid,
        courselink: val.courselink,
        user: val.user,
        categoryid: val.categoryid,
      };
      if (val.Instructorid !== undefined) {
        getInstructorfromID(val, setData, course);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCourseVideos = (id, setVideos) => {
  axios
    .get(`http://127.0.0.1:8000/loadVideos/${id}`)
    .then((res) => {
      setVideos(res.data.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
export { getCourses, getCourseDescription, getCourseVideos };
