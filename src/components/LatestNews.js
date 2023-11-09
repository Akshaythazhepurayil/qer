import React from "react";
import "./LatestNews.css";
import LatestNewsCarousel from "./LatestNewsCarousel";
import LatestCarouselButton from "./LatestCarouselButton";

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <div className="latest-news-head">
        <h2>Latest News</h2>
        <LatestCarouselButton />
      </div>
      <div className="latest-news-cards">
        <LatestNewsCarousel />
      </div>
    </div>
  );
};

export default LatestNews;
