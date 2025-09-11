import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowBack } from 'react-icons/io';

// Custom Prev Arrow
const PrevArrow = ({ className, onClick }) => (
  <div
      className={`${className} prev-arrow`}
      onClick={onClick}
    >
      <FaChevronLeft size={20} color="black" className='arr' />
    </div>
);

// Custom Next Arrow
const NextArrow = ({ className, onClick }) => (
  <div
      className={`${className} next-arrow border-4`} onClick={onClick}>
      <span className="left-arr-carousel text-black bg-white" ><IoIosArrowBack />
                </span>
    </div>
);

const Singleproduct = ({ products, title = "Products", badgeText = "Customizable"}) => {
  const settings = {
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 6,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container-fluid mt-4 position-relative -z-1 bg-white pt-2 mx-2">
      <p className="fw-bold  fs-3 mb-3">{title}</p>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <div className="card h-100 mx-2">
              <div
                className='single-product-img'
              >
                <img
                  src={product.img}
                  alt={product.title}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                  className="zoom-hover"
                />
               
              </div>

              <div className="card-body p-2 text-center">
                
                <p className="mt-2 mb-1 fs-5">{product.title}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Singleproduct;
