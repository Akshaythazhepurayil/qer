import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./ProductRangeCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import generator from "../assets/images/png/generator.png";
import motor_grader from "../assets/images/png/motor_grader.png";
import compactor from "../assets/images/png/compactor.png";
import excavator from "../assets/images/png/excavator.png";
import mini_truck from "../assets/images/png/mini_truck.png";
import backhoe_loader from "../assets/images/png/backhoe_loader.png";

import React from "react";
import ProductRangeCard from "./ProductRangeCard";

const ProductRangeCarousel = ({ image, title }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={29}
      slidesPerView={2}
      // navigation
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="slide">
        <ProductRangeCard image={motor_grader} title="Motor Graders" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={compactor} title="Compactors" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={excavator} title="Excavators" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={mini_truck} title="Mining Trucks" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={backhoe_loader} title="Backhoe Loaders" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={generator} title="Generator" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={motor_grader} title="Motor Graders" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductRangeCarousel;
