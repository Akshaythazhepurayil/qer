import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./ProductRangeCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BrandLogoCard from "./BrandLogoCard";
import komatsu from "../assets/images/png/komatsu.png";
import caterpiller from "../assets/images/png/caterpiller.png";
import volvo from "../assets/images/png/volvo.png";
import jcb_logo from "../assets/images/png/jcb_logo.png";
import jlg_logo from "../assets/images/png/jlg_logo.png";
import atlas_copco_logo from "../assets/images/png/atlas_copco_logo.png";

const PartnersCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={8}
      // navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        820: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 8,
          spaceBetween: 30,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="">
      <BrandLogoCard brandLogo={komatsu} />
      </SwiperSlide>
      <SwiperSlide className="">
      <BrandLogoCard brandLogo={caterpiller} />
      </SwiperSlide>
      <SwiperSlide className="">
      <BrandLogoCard brandLogo={volvo} />
      </SwiperSlide>
      <SwiperSlide className="">
      <BrandLogoCard brandLogo={jcb_logo} />
      </SwiperSlide>
      <SwiperSlide className="">
      <BrandLogoCard brandLogo={jlg_logo} />
      </SwiperSlide>
      <SwiperSlide className="">
      <BrandLogoCard brandLogo={atlas_copco_logo} />                  
      </SwiperSlide>
      <SwiperSlide className="carouselcard">
      <BrandLogoCard brandLogo={komatsu} />
      </SwiperSlide>
      <SwiperSlide className="">
      <BrandLogoCard brandLogo={jcb_logo} />
      </SwiperSlide>
    </Swiper>
  )
}

export default PartnersCarousel