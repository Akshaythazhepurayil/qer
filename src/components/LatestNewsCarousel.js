import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./LatestNewsCarousel.css";

import React from "react";
import card_one_img from "../assets/images/jpg/card_one_img.jpg";
import card_two_img from "../assets/images/jpg/card_two_img.jpg";
import card_three_img from "../assets/images/jpg/card_three_img.jpg";
import card_four_img from "../assets/images/jpg/card_four_img.jpg";
import LatestNewsCard from "./LatestNewsCard";

const LatestNewsCarousel = () => {
  return (
    <Swiper
      className="latest-slide"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation= {{
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <LatestNewsCard
          tag="NEWS"
          bg="#2364be"
          image={card_one_img}
          head="15th DEC, 2021"
          subHead="Heavy Equipment Manufacturers Try to Lure"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LatestNewsCard
          tag="NEWS"
          bg="#2364be"
          image={card_two_img}
          head="15th DEC, 2021"
          subHead="Big Equipment Company will  produce new 'Big Bud' tractors"
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <LatestNewsCard
          tag="PROMOTIONS"
          bg="#f99c2e"
          image={card_three_img}
          head="15th DEC, 2021"
          subHead="CASE dealer ASCO acquires  OCT Equipment"
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <LatestNewsCard
          tag="PROMOTIONS"
          bg="#f99c2e"
          image={card_four_img}
          head="15th DEC, 2021"
          subHead="7 machinery insights from  XtremeAg farmers"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LatestNewsCard
          tag="PROMOTIONS"
          bg="#f99c2e"
          image={card_one_img}
          head="15th DEC, 2021"
          subHead="Heavy Equipment Manufacturers Try to Lure"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LatestNewsCard
          tag="PROMOTIONS"
          bg="#f99c2e"
          image={card_one_img}
          head="15th DEC, 2021"
          subHead="Heavy Equipment Manufacturers Try to Lure"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LatestNewsCard
          tag="PROMOTIONS"
          bg="#f99c2e"
          image={card_one_img}
          head="15th DEC, 2021"
          subHead="Heavy Equipment Manufacturers Try to Lure"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default LatestNewsCarousel;
