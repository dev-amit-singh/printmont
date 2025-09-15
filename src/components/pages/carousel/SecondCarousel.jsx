import React, { useRef, useState, useEffect } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SecondCarousel = ({
  products,
  title = "Products",
  badgeText = "Customizable"
}) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding errors
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    updateScrollButtons(); // Run once on mount

    const container = scrollRef.current;
    if (!container) return;

    // Update on scroll
    container.addEventListener("scroll", updateScrollButtons);

    // Update on resize
    window.addEventListener("resize", updateScrollButtons);

    // Cleanup
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="horizontal-scroll-wrapper position-relative bg-white pt-3 m-0 m-md-1 ">
      <p className="fw-semibold fs-4 mb-3 ms-3 ">{title}</p>

      {/* Show arrows conditionally */}
      {canScrollLeft && (
        <button
          className="scroll-arrow left align-items-center justify-content-end border-0 ms-5 d-none d-lg-flex"
          onClick={() => scroll('left')}
        >
          <span className="left-arr-carousel text-black bg-white" ><IoIosArrowBack />
          </span>
        </button>
      )}

      {canScrollRight && (
        <button
          className="scroll-arrow right  align-items-center justify-content-end border-0 me-2 d-none d-lg-flex "
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <span className=" right-arr-carousel text-black bg-white"><IoIosArrowForward /></span>
        </button>
      )}

      <div className="scroll-container " ref={scrollRef}>
        {products.map((product, index) => (
          <div className="scroll-card  border pb-3 pb-lg-0" key={index}>
            <div className="image-container  bg-white ">
              <img
                src={product.img}
                alt={product.title}
                className="product-image zoom-hover"
              />
              <span className="badge bg-primary position-absolute top-0 start-0 m-1">
                {product.badge}
              </span>
            </div>

            <div className="card-body text-center">
              <div className="d-none d-lg-flex bg-theme text-uppercase text-white fw-medium mt-1 fs-7 fs-md-6">
                {badgeText}
              </div>
              <p className="medium mb-0 title">{product.title}</p>
              <p className="mb-0 title">
               ₹{product.price}{" "}
                <del className="text-muted title">₹{product.originalPrice}</del>{" "}
                <span className="text-success fw-bold">{product.discount}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondCarousel;
