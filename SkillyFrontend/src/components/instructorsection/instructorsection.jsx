import React from "react";
import "./instructorsection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card2 from "../card2/card2";
import { useEffect, useState } from "react";
import { getInstructorsfromCat } from "../../codes/api/Instructors";

const InstructorSection = ({ title, catid, setIns }) => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    getInstructorsfromCat(setIns, setInstructor, catid);
  }, []);
  return instructor.length === 0 ? (
    <></>
  ) : (
    <>
      <div className="inssec">
        <div className="title">{title}</div>
        <div className="swap">
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
                {console.log(item.channelLink)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <hr className="inshr" />
    </>
  );
};

export default InstructorSection;
