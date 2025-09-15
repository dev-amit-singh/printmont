import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SingleProduct = ({
  products,
  title = "Products",
  backgroundImageUrl // ⬅ New prop
}) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
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
    updateScrollButtons();

    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div
      className={`horizontal-scroll-wrapper position-relative bg-transparent mx-2 pt-3 ${backgroundImageUrl ? 'custom-bg-image' : ''}`}
      style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` :  {backgroundColor: 'white'} }}
    >
      <p className="fw-semibold fs-5 fs-md-4 mb-3 ms-3">{title}</p>

      {canScrollLeft && (
        <button className="scroll-arrow left" onClick={() => scroll('left')}>
          <span className="left-arr-carousel text-black bg-white">
            <IoIosArrowBack />
          </span>
        </button>
      )}

      {canScrollRight && (
        <button className="scroll-arrow right d-sm-none d-lg-flex align-items-center justify-content-end"
          onClick={() => scroll('right')}>
          <span className="right-arr-carousel text-black bg-white">
            <IoIosArrowForward />
          </span>
        </button>
      )}

      <div className="scroll-container" ref={scrollRef}>
        {products.map((product, index) => (
          <div className="scroll-card bd border" key={index}>
            <div className="image-container">
              <img
                src={product.img}
                alt={product.title}
                className="product-image zoom-hover mt-3"
              />
            </div>
            <div className="card-body text-center">
              <p className="medium my-2">{product.title}</p>
              <p className="medium my-2 text-success fw-bold">{product.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
