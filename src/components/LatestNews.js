import React from "react";
import "./LatestNews.css";
import CarouselButton from "./CarouselButton";
import LatestNewsCarousel from "./LatestNewsCarousel";

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <div className="latest-news-head">
        <h2>Latest News</h2>
        <CarouselButton />
      </div>
      <div className="latest-news-cards">
        <LatestNewsCarousel />
      </div>
    </div>
  );
};

export default LatestNews;
