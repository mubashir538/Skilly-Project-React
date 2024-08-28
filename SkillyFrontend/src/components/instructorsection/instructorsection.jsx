import React from "react";
import "./instructorsection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card2 from "../card2/card2";
import axios from "axios";
import { useEffect, useState } from "react";
const InstructorSection = ({ title, catid }) => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
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
        setInstructor((prev) => [...prev, ins]);
      });
    });
  }, []);
  return (
    <>
      <div className="inssec">
        <div className="title">{title}</div>
        <div className="swap">
          {instructor.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {instructor.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card2 key={index} details={item}></Card2>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
      <hr className="inshr" />
    </>
  );
};

export default InstructorSection;
