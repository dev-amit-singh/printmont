import React from 'react';

const Banner = () => {
  return (
    <>
      {/* Large screens (≥ md): Flex side-by-side layout */}
      <div className="container-fluid bg-light d-none d-md-flex align-items-center justify-content-center gap-3 p-0">
        <div className="col-6 p-0">
          <img src="./section-img/online-shopping.jpg" width="100%" alt="online-shopping" />
        </div>
        <div className="col-6 p-0">
          <img src="./section-img/lap-hoodie.jpg" width="100%" alt="lap-hoodie" />
        </div>
      </div>

      {/* Small screens (< md): Auto-scroll carousel */}
      <div className="container-fluid px-0 d-md-none">
        <div
          id="bannerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000" 
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./section-img/online-shopping.jpg" className="d-block w-100" alt="online-shopping" />
            </div>
            <div className="carousel-item">
              <img src="./section-img/lap-hoodie.jpg" className="d-block w-100" alt="lap-hoodie" />
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Banner;
