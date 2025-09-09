import React from 'react';
import {fristcrouselImg} from "../../../../data/data"

const FirstCrousel = () => {
  

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="3000" >
      <div className="carousel-inner">
        {fristcrouselImg.map((src, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={index}
          >
            <img src={src} className="d-block w-100 " alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FirstCrousel;

