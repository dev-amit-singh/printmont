import React from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <FaChevronRight size={20} color="black" className='arr' />
  </div>
);

const SecondCarousel = ({ products, title = "Products", badgeText = "Customizable"}) => {
  const settings = {
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
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
    <div className="container-fluid mt-md-4 position-relative -z-1">
      <p className="fw-bold  fs-3 mb-3">{title}</p>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <div className="card h-100 mx-2">
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f8f8f8",
                  position: "relative",
                }}
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
                <span className="badge bg-primary position-absolute top-0 start-0 m-1">
                  {product.badge}
                </span>
              </div>

              <div className="card-body p-2 text-center">
                <div className="bg-primary text-white small py-1 fw-bold">
                  {badgeText}
                </div>
                <p className="mt-2 mb-1 medium">{product.title}</p>
                <p className="mb-0">
                  ₹{product.price}{" "}
                  <del className="text-muted">₹{product.originalPrice}</del>{" "}
                  <span className="text-success fw-bold">{product.discount}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SecondCarousel;
