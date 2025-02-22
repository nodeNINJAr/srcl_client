
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './style.css';


// 
const HeroSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
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
          <SwiperSlide className='bg-1 min-h-[400px] relative'>
              <h1 className='text-4xl font-semibold text-white absolute left-6 bottom-8'>Conserving the Nature</h1>
          </SwiperSlide>
          <SwiperSlide className='bg-2 min-h-[400px] relative'>
              <h1 className='text-4xl font-semibold text-white absolute left-6 bottom-8'>Conserving the Nature</h1>
          </SwiperSlide>
          <SwiperSlide className='bg-3 min-h-[400px] relative'>
              <h1 className='text-4xl font-semibold text-white absolute left-6 bottom-8'>Conserving the Nature</h1>
          </SwiperSlide>
          <SwiperSlide className='bg-4 min-h-[400px] relative'> 
            <h1 className='text-4xl font-semibold text-white absolute left-6 bottom-8'>Conserving the Nature</h1>
          </SwiperSlide>
          <SwiperSlide className='bg-5 min-h-[400px] relative'>
             <h1 className='text-4xl font-semibold text-white absolute left-6 bottom-8'>Conserving the Nature</h1>
             </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    );
}

export default HeroSlider