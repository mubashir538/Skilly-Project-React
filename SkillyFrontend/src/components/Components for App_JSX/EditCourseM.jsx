import React, { useDebugValue, useEffect } from "react";
import AddCourse from "../../views/AddCourse/AddCourse";
import Input from "../../components/input/input";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { getInstructorfromID } from "../../codes/api/Instructors";
import Loader from "../../components/loader/loader";

const EditCourseM = ({ setPlay, play, setToastColor, setToast }) => {
  const [courseName, setCourseName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [ins, setIns] = useState({});
  const [channelLink, setChannelLink] = useState("");
  const [playlistlink, setPlaylistlink] = useState("");
  const location = useLocation();
  useEffect(() => {
    setCourseName(location.state.item.name);
    setPlaylistlink(
      "https://www.youtube.com/playlist?list=" + location.state.item.courselink
    );
    getInstructorfromID(location.state.item.insid, setIns);
  }, []);

  useEffect(() => {
    setChannelLink("https://www.youtube.com/@" + ins.channelLink);
    let name = ins.instructor;
    setTeacher(name);
  }, [ins]);


  return ins.instructor !== undefined ? (
    <AddCourse
      type={"edit"}
      heading={"Edit Course"}
      btnText={"Confirm Edit"}
      courseName={courseName}
      teacher={teacher}
      channelLink={channelLink}
      playlistlink={playlistlink}
      location={location.state.item}
      CategoryIndex={location.state.item.catid}
      play={play}
      setPlay={setPlay}
      setToastColor={setToastColor}
      setToast={setToast}
    >
      <Input
        typ="text"
        placeholder="Course Name"
        setdata={setCourseName}
        data={courseName}
      />
      <Input
        typ="text"
        placeholder="Course Link"
        setdata={setPlaylistlink}
        data={playlistlink}
      />
      <Input
        typ="text"
        placeholder="Instructor Name"
        setdata={setTeacher}
        data={teacher}
      />
      <Input
        typ="text"
        placeholder="Channel Link"
        setdata={setChannelLink}
        data={channelLink}
      />
    </AddCourse>
  ) : (
    <Loader />
  );
};

export default EditCourseM;
