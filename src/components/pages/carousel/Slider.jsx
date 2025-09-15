import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles

const Slider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper my-1 d-block d-lg-none">
        <SwiperSlide><img src="./crouselimages/swiper-1.jpg" width={"100%"} className='object-cover-fit' alt="" /></SwiperSlide>
        <SwiperSlide><img src="./crouselimages/swiper-2.jpg" width={"100%"} className='object-cover-fit' alt="" /></SwiperSlide>
        <SwiperSlide><img src="./crouselimages/swiper-3.jpg" width={"100%"} className='object-cover-fit' alt="" /></SwiperSlide>
        <SwiperSlide><img src="./crouselimages/swiper-4.jpg" width={"100%"} className='object-cover-fit' alt="" /></SwiperSlide>
        <SwiperSlide><img src="./crouselimages/swiper-5.jpg" width={"100%"} className='object-cover-fit' alt="" /></SwiperSlide>
        <SwiperSlide><img src="./crouselimages/swiper-6.jpeg" width={"100%"} className='object-cover-fit' alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider