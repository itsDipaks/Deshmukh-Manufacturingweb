import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Products.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function ProductSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
          <img src="http://htcarb.com/assets/img/HeadingPallets.jpg" alt=""/>
          <h1>TC BUSH</h1>
         
          </div></SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="http://htcarb.com/assets/img/HeadingPallets.jpg" alt=""/>
          <h1>TC BUSH</h1>
         
          </div></SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="http://htcarb.com/assets/img/HeadingPallets.jpg" alt=""/>
          <h1>TC BUSH</h1>
         
          </div></SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="http://htcarb.com/assets/img/HeadingPallets.jpg" alt=""/>
          <h1>TC BUSH</h1>
         
          </div></SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="http://htcarb.com/assets/img/HeadingPallets.jpg" alt=""/>
          <h1>TC BUSH</h1>
         
          </div></SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="http://htcarb.com/assets/img/HeadingPallets.jpg" alt=""/>
          <h1>TC BUSH</h1>
         
          </div></SwiperSlide>
        <SwiperSlide>
          <div>
          <img src="http://htcarb.com/assets/img/HeadingPallets.jpg" alt=""/>
          <h1>TC BUSH</h1>
         
          </div></SwiperSlide>
       
      </Swiper>
    </>
  );
}
