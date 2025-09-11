import React from 'react';
import { fristcrouselImg } from "../../../../data/data"
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";


const FirstCrousel = () => {


  return (
    <div id="carouselExample" className="carousel slide container-fluid" data-bs-ride="carousel" data-bs-interval="3000" >
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
        className="carousel-control-prev d-flex align-items-center justify-content-start ms-3"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="left-arr-carousel text-black bg-white" ><IoIosArrowBack />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next d-flex align-items-center justify-content-end me-3"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className=" right-arr-carousel text-black bg-white"><IoIosArrowForward />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FirstCrousel;

