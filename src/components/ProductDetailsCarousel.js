import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./ProductDetailsCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import abot_bg_img from "../assets/images/png/abot_bg_img.png";

const ProductDetailsCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      navigation= {{
        nextEl: ".product-detail-nav",
        prevEl: "",
      }}
      // breakpoints={{
        // 375: {
        //   slidesPerView: 2,
        //   spaceBetween: 1,
        // },
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 1,
        // },
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        // 820: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        // 1024: {
        //   slidesPerView: 4,
        //   spaceBetween: 50,
        // },
      //   1600: {
      //     slidesPerView: 1,
      //     spaceBetween: 1,
      //   },
      // }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="product-details-carousel">
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel">
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel">
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel">
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel">
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel">
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel">
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>

    </Swiper>
  )
}

export default ProductDetailsCarousel