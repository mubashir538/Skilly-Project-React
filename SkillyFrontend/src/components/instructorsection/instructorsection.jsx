import React from "react";
import "./instructorsection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card2 from "../card2/card2";

const InstructorSection = ({ title }) => {
  return (
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
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <hr className="inshr"/>
    </>
  );
};

export default InstructorSection;
