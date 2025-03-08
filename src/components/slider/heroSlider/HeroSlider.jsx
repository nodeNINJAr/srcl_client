import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./style.css";
import { Fade } from "react-awesome-reveal";

//
const HeroSlider = () => {
  const slidesData = [
    { bgClass: "bg-3", title: "Police Staff College Development" },
    { bgClass: "bg-4", title: "Conservation Efforts in Cox's Bazar" },
    { bgClass: "bg-5", title: "Aerial Drone Survey Insights" },
    { bgClass: "bg-6", title: "Environmental Impact of Redmin Project" },
    { bgClass: "bg-7", title: "RHD Infrastructure and Development" },
    { bgClass: "bg-8", title: "UNDP Sustainable Development Projects" },
    { bgClass: "bg-2", title: "Community Needs and Concerns Survey" },
    { bgClass: "bg-10", title: "Effective Sanitation System Management" },
    { bgClass: "bg-11", title: "Promoting Community Volunteerism" },
    { bgClass: "bg-1", title: "Impact of Severe Flooding Crisis" }
  ];
  

  //
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        //   navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide
            key={slide?.bgClass}
            className={`${slide?.bgClass}  min-h-[400px] relative `}
          >
            <Fade
              duration={1500}
              direction="up"
              className="absolute left-6 bottom-8"
            >
              <h1 className="text-4xl font-bold font-Albert capitalize text-black inline-block bg-white/20 px-4 py-1 rounded-lg">
                {slide?.title}
              </h1>
            </Fade>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlider;
