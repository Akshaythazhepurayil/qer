import React from "react";
import "./Header.css";
import carousel_img_one from "../assets/images/jpg/carousel_img_one.jpg";
import categories_img from "../assets/images/png/categories_img.png";
import rightArrow from "../assets/images/png/rightArrow.png";
import downArrow from "../assets/images/png/downArrow.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Header = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        direction="vertical"
      >
        <SwiperSlide className="header-carousel">
          <div className="slider-one">
            <div>
              <h1 className="">
                Reliable Products and Professional Assistance
              </h1>
              <div className="categories">
                <h4 className="categories-text">Categories</h4>
                <div className="categories_img">
                  <img src={categories_img} alt="" />
                </div>
                <a href="/" className="categories-button">
                  <img src={rightArrow} alt="" />
                </a>
              </div>
            </div>
            <div>
              <img  src={carousel_img_one} alt="" />
            </div>
            <button className="next-button-carousel">
              <span>
                <img src={downArrow} alt="" />
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="header-carousel">Slide 2</SwiperSlide>
        <SwiperSlide className="header-carousel">Slide 3</SwiperSlide>
        <SwiperSlide className="header-carousel">Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
