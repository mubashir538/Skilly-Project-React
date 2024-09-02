import axios from "axios";
import { getUserIDfromCookie } from "../../codes/functions/Cookie";
import { useNavigate } from "react-router-dom";

const handleOnClick = async (
  location,
  type,
  setPlay,
  setToastColor,
  setToast,
  CategoryIndex,
  Category,
  courseName,
  playlistlink,
  teacher,
  channelLink,
  navigate
) => {
  let catval;
  if (CategoryIndex !== undefined) {
    catval = CategoryIndex;
  } else {
    catval = Category[0];
  }
  console.log(channelLink)
  const response = await axios.post("http://127.0.0.1:8000/instructor/", {
    teacher: teacher,
    channelLink: channelLink,
    Category: catval,
  });
  if (response.data.status == "400") {
    setPlay(true);
    setToastColor("#EF233C");
    setToast("Invalid Channel Link!");
    return;
  }
  if (response.data.status == "200") {
    if (type === "add") {
      handleAdd(
        response,
        setPlay,
        playlistlink,
        Category,
        setToastColor,
        setToast,
        courseName,
        navigate
      );
    } else {
      handleEdit(
        courseName,
        playlistlink,
        location,
        Category,
        setPlay,
        setToastColor,
        setToast,
        navigate
      );
    }
  }
};

const handleAdd = async (
  response,
  setPlay,
  playlistlink,
  Category,
  setToastColor,
  setToast,
  courseName,
  navigate
) => {
  const response2 = await axios.post("http://127.0.0.1:8000/course/", {
    name: courseName,
    playlistlink: playlistlink,
    instructor: response.data.id,
    category: Category,
    userid: getUserIDfromCookie(),
  });
  if (response2.data.status === 200) {
    setPlay(true);
    setToastColor("#10B981");
    setToast("Course Added Successfully!");
    navigate("/profile");
  } else {
    setPlay(true);
    setToastColor("#EF233C");
    setToast(response2.data.error);
  }
};

const handleEdit = async (
  courseName,
  plink,
  location,
  Category,
  setPlay,
  setToastColor,
  setToast,
  navigate
) => {
  const res2 = await axios.post(
    "http://127.0.0.1:8000/editcourse/" + location.id,
    {
      name: courseName,
      playlistlink: plink,
      instructor: location.insid,
      category: Category,
      userid: getUserIDfromCookie(),
    }
  );

  if (res2.data.status === 200) {
    setPlay(true);
    setToastColor("#10B981");
    setToast("Course Edited Successfully!");
    navigate("/profile");
  } else {
    setPlay(true);
    setToastColor("#EF233C");
    setToast(response2.data.error);
  }
};

export { handleOnClick };
