import React, { useRef } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft  } from "react-icons/fa";


const SecondCarousel = ({
  products,
  title = "Products",
  badgeText = "Customizable"
}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300; // Adjust if needed
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="horizontal-scroll-wrapper position-relative">
      <p className="fw-bold fs-3 mb-3">{title} </p>

      {/* Arrows (visible only on large screens via CSS) */}
      <button
        className="scroll-arrow left"
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        
        <FaArrowCircleLeft color='gray'/>
      </button>
      <button
        className="scroll-arrow right "
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        <FaArrowCircleRight className=''color='gray'/>
      </button>

      <div className="scroll-container" ref={scrollRef}>
        {products.map((product, index) => (
          <div className="scroll-card" key={index}>
            <div className="image-container">
              <img
                src={product.img}
                alt={product.title}
                className="product-image"
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
        ))}
      </div>
    </div>
  );
};

export default SecondCarousel;
