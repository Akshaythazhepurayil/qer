import React from "react";
import "./LatestNews.css";
import CarouselButton from "./CarouselButton";
import LatestNewsCarousel from "./LatestNewsCarousel";

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <div className="latest-news-head">
        <h2>Latest News</h2>
        {/* <CarouselButton /> */}
        <div className="latest-news-button">
          <button className="prev-btn">&#8592;</button>
          <button className="next-btn">&#8594;</button>
        </div>
      </div>
      <div className="latest-news-cards">
        <LatestNewsCarousel />
      </div>
    </div>
  );
};

export default LatestNews;
