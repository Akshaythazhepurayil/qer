import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./RelatedProductsCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import wheel_loaders from "../assets/images/png/wheel_loaders.png";
import motor_grader_two from "../assets/images/png/motor_grader_two.png";
import compactor_two from "../assets/images/png/compactor_two.png";
import backhoe_loader_two from "../assets/images/png/backhoe_loader_two.png";
import RelatedProductCard from "./RelatedProductCard";

const RelatedProductsCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={5}
      navigation={{
        nextEl: ".related-products-next",
        prevEl: ".related-products-prev",
      }}
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
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
          spaceBetween: 25,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={motor_grader_two} title="Motor Graders" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={wheel_loaders}
          title="Wheel Loaders" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={compactor_two}
          title="Compactors" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={backhoe_loader_two}
          title="Backhoe Loaders" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={motor_grader_two} title="Motor Graders" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={motor_grader_two} title="Motor Graders" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={wheel_loaders}
          title="Wheel Loaders" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={compactor_two}
          title="Compactors" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={backhoe_loader_two}
          title="Backhoe Loaders" />
      </SwiperSlide>
      <SwiperSlide className="related-product-slide">
        <RelatedProductCard image={motor_grader_two} title="Motor Graders" />
      </SwiperSlide>
    </Swiper>
  );
};

export default RelatedProductsCarousel;
