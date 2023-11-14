import React, { useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./RelatedSectionCarousel.css";

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
import RelatedSectionCard from "./RelatedSectionCard";

const RelatedSectionCarousel = () => {
  const [border, setBorder] = useState("border-one");
  const hoverStyle = (sectionId) => {
    setBorder(sectionId);
  };
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
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide
        className={`related-slide ${
          border === "border-one" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-one")}
        id="border-one"
      >
        <RelatedSectionCard image={sg_iron_img} title="SG IRON RH Carrier" />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-two" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-two")}
        id="border-two"
      >
        <RelatedSectionCard
          image={synchronous_egg_img}
          title="Synchronous Egg Turner Motor 220-240V 5/6rpm"
        />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-three" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-three")}
        id="border-three"
      >
        <RelatedSectionCard
          image={komatsu_excavator}
          title="Komatsu Excavator PC130 Suote-power Core"
        />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-four" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-four")}
        id="border-four"
      >
        <RelatedSectionCard
          image={tata_hitachi_part}
          title="TATA Hitachi EX100 Sprocket"
        />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-five" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-five")}
        id="border-five"
      >
        <RelatedSectionCard image={sg_iron_img} title="SG IRON RH Carrier" />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-six" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-six")}
        id="border-six"
      >
        <RelatedSectionCard
          image={synchronous_egg_img}
          title="Synchronous Egg Turner Motor 220-240V 5/6rpm"
        />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-seven" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-seven")}
        id="border-seven"
      >
        <RelatedSectionCard
          image={komatsu_excavator}
          title="Komatsu Excavator PC130 Suote-power Core"
        />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-eight" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-eight")}
        id="border-eight"
      >
        <RelatedSectionCard
          image={tata_hitachi_part}
          title="TATA Hitachi EX100 Sprocket"
        />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-nine" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-nine")}
        id="border-nine"
      >
        <RelatedSectionCard image={sg_iron_img} title="SG IRON RH Carrier" />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-ten" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-ten")}
        id="border-ten"
      >
        <RelatedSectionCard
          image={synchronous_egg_img}
          title="Synchronous Egg Turner Motor 220-240V 5/6rpm"
        />
      </SwiperSlide>
      {/* <SwiperSlide
        className={`related-slide ${
          border === "border-two" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-two")}
        id="border-eight"
      >
        <RelatedSectionCard
          image={komatsu_excavator}
          title="Komatsu Excavator PC130 Suote-power Core"
        />
      </SwiperSlide>
      <SwiperSlide
        className={`related-slide ${
          border === "border-two" ? "active-border" : ""
        }`}
        onClick={() => hoverStyle("border-two")}
        id="border-eight"
      >
        <RelatedSectionCard
          image={tata_hitachi_part}
          title="TATA Hitachi EX100 Sprocket"
        />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default RelatedSectionCarousel;
