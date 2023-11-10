import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./ProductRangeCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import sg_iron_img from "../assets/images/png/sg_iron_img.png";
import komatsu_excavator from "../assets/images/png/komatsu_excavator.png";
import tata_hitachi_part from "../assets/images/png/tata_hitachi_part.png";
import synchronous_egg_img from "../assets/images/png/synchronous_egg_img.png";
import RelatedProductCard from "./RelatedProductCard";

const RelatedSectionCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={5}
      navigation={{
        nextEl: ".related-next",
        prevEl: ".related-prev",
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
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={sg_iron_img} title="SG IRON RH Carrier" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard
          image={synchronous_egg_img}
          title="Synchronous Egg Turner Motor 220-240V 5/6rpm"
        />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={komatsu_excavator} title="Komatsu Excavator PC130 Suote-power Core" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={tata_hitachi_part} title="TATA Hitachi EX100 Sprocket" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={sg_iron_img} title="SG IRON RH Carrier" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard
          image={synchronous_egg_img}
          title="Synchronous Egg Turner Motor 220-240V 5/6rpm"
        />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={komatsu_excavator} title="Komatsu Excavator PC130 Suote-power Core" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={tata_hitachi_part} title="TATA Hitachi EX100 Sprocket" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={sg_iron_img} title="SG IRON RH Carrier" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard
          image={synchronous_egg_img}
          title="Synchronous Egg Turner Motor 220-240V 5/6rpm"
        />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={komatsu_excavator} title="Komatsu Excavator PC130 Suote-power Core" />
      </SwiperSlide>
      <SwiperSlide className="related-slide">
        <RelatedProductCard image={tata_hitachi_part} title="TATA Hitachi EX100 Sprocket" />
      </SwiperSlide>
    </Swiper>
  );
};

export default RelatedSectionCarousel;
