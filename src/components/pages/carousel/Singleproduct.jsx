import React, { useRef, useState, useEffect } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SingleProduct = ({
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
    <div className="horizontal-scroll-wrapper position-relative bg-white mx-2 pt-2">
      <p className="fw-bold fs-3 mb-3">{title}</p>

      {/* Show arrows conditionally */}
      {canScrollLeft && (
        <button
          className="scroll-arrow left "
          onClick={() => scroll('left')}
        >
          <span className="left-arr-carousel text-black bg-white " ><IoIosArrowBack />
          </span>
        </button>
      )}

      {canScrollRight && (
        <button
          className="scroll-arrow right  d-flex align-items-center justify-content-end"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <span className=" right-arr-carousel text-black bg-white"><IoIosArrowForward /></span>
        </button>
      )}

      <div className="scroll-container " ref={scrollRef}>
        {products.map((product, index) => (
          <div className="scroll-card bd  border" key={index}>
            <div className="image-container  ">
              <img
                src={product.img}
                alt={product.title}
                className="product-image zoom-hover mt-3"
              />
              
            </div>

            <div className="card-body text-center">
              
              <p className="medium my-2">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
