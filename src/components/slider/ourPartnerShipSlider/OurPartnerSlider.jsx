import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper.css";

const OurPartnerSlider = () => {
  const organizations = [
    {
      id: 1,
      name: "Bangladesh Government",
      image: "https://i.ibb.co/6JbPxNhS/BD-GOV.png",
    },
    {
      id: 2,
      name: "Bangladesh Inland Water Transport Authority (BIWTA)",
      image: "https://i.ibb.co/Ld91PQr0/BIWTA.png",
    },
    {
      id: 3,
      name: "Bangladesh Water Development Board (BWDB)",
      image: "https://i.ibb.co/wrSd1C8W/BWDB.png",
    },
    {
      id: 4,
      name: "Dhaka Electric Supply Company Limited (DESCO)",
      image: "https://i.ibb.co/7JLQNH9R/DESCO.png",
    },
    {
      id: 5,
      name: "Department of Environment (DOE)",
      image: "https://i.ibb.co/mFYMHY0y/DOE.png",
    },
    {
      id: 6,
      name: "Power Grid Company of Bangladesh Limited (PGCB)",
      image: "https://i.ibb.co/VcVk04d9/PGCB.png",
    },
    {
      id: 7,
      name: "Water Resources Planning Organization (WARPO)",
      image: "https://i.ibb.co/DPRNBFzh/WARPO.png",
    },
  ];

  //
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
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
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <div>
        {organizations?.map((item) => (
          <SwiperSlide className="w-32 h-32 mx-auto" key={item?.id}>
            <figure>
              <img
                className="w-32 h-32 mx-auto object-fill py-10"
                title={item?.name}
                src={item?.image}
                alt={item?.name}
              />
            </figure>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default OurPartnerSlider;
