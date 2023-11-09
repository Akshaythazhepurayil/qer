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
// import left_button from "../assets/images/png/left_button.png";
// import right_button from "../assets/images/png/right_button.png";

import React from "react";
import ProductRangeCard from "./ProductRangeCard";

const ProductRangeCarousel = ({idPrev, idNext }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={29}
      slidesPerView={6}
      navigation= {{
        nextEl: ".next",
        prevEl: ".prev",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
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
      <SwiperSlide className="slide">
        <ProductRangeCard image={motor_grader} title="Motor Graders" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={backhoe_loader} title="Backhoe Loaders" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={excavator} title="Excavators" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={compactor} title="Compactors" />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <ProductRangeCard image={motor_grader} title="Motor Graders" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductRangeCarousel;
