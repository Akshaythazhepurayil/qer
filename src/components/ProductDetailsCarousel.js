import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./ProductDetailsCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import abot_bg_img from "../assets/images/png/abot_bg_img.png";

const ProductDetailsCarousel = ({id}) => {
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
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="product-details-carousel" id='1'>
      <img className='product-details-img' src={abot_bg_img} alt="" id='1'/>
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel" id='2'>
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel" id='3'>
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel" id='4'>
      <img className='product-details-img' src={abot_bg_img} alt="" />
      </SwiperSlide>
      <SwiperSlide className="product-details-carousel" id='5'>
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