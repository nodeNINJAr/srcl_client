import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper , SwiperSlide } from 'swiper/react';
import ".././swiper.css";
import slide1 from "../../../assets/image/sister-concern/captain_rose_technology.png"
import slide2 from "../../../assets/image/sister-concern/carp.png"
import slide3 from "../../../assets/image/sister-concern/pti-removebg.png"
import slide4 from "../../../assets/image/sister-concern/rose_agro-removebg.png"
import slide5 from "../../../assets/image/sister-concern/Rose_Builders-removebg.png"
import slide6 from "../../../assets/image/sister-concern/rose_import_export.png"

// 
const SisterConcernSlider = () => {
  const organizations = [
    {
      id: 1,
      name: "Rose Builders and Construction (ROS-CON)",
      image:slide5,
      sector: "Construction & Development"
    },
    {
      id: 2,
      name: "Captain Rose Technologies (CRT)",
      image:slide1,
      sector: "IT"
    },
    {
      id: 3,
      name: "Professional Training Institute (PTI)",
      image:slide3,
      sector: "Training"
    },
    {
      id: 4,
      name: "Community Advancement for Rural People (CARP)",
      image: slide2,
      sector: "NGO"
    },
    {
      id: 5,
      name: "Rose Export Import",
      image:slide6,
      sector: "Export-Import"
    },
    {
      id: 6,
      name: "Rose Agro",
      image: slide4,
      sector: "Agriculture"
    }
  ];


  return (
    <div>
    <Swiper
      slidesPerView={4}
      spaceBetween={60}
      pagination={{
        clickable: true,
      }}
      slidesPerGroup={5}
      autoplay={{
        delay: 3000, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Keep autoplaying even when interacting with the slider
      }}
      loop={true} // Enable looping
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
    >
      <div>
        {organizations?.map((item) => (
          <SwiperSlide key={item?.id}>
            <figure className='w-36 mx-auto'>
              <img
                className="object-fill py-10"
                title={item?.name}
                src={item?.image}
                alt={item?.name}
              />
            </figure>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
    </div>
  )
}

export default SisterConcernSlider;