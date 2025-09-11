import React from 'react';

const BannerTwo = () => {
  return (
    <>
      {/* Large screens (≥ md): Flex side-by-side layout */}
      <div className="container-fluid bg-light d-none d-md-flex align-items-center justify-content-center gap-1 p-0 m-md-2">
        <div className="col-4 p-0 rounded">
          <img className='rounded' src="./section-img/girl-with-bag.jpg" width="100%" alt="online-shopping" />
        </div>
        <div className="col-4 p-0 rounded-sm">
          <img src="./section-img/online-shopping.jpg" width="100%" alt="lap-hoodie" />
        </div>
        <div className="col-4 p-0 rounded-sm">
          <img src="./section-img/footwear.jpg" width="100%" alt="lap-hoodie" />
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
            <div className="carousel-item active ">
              <img src="./section-img/online-shopping.jpg" className="d-block w-100" alt="online-shopping" />
            </div>
            <div className="carousel-item">
              <img src="./section-img/girl-with-bag.jpg" className="d-block w-100" alt="girl-with-bag" />
            </div>
            <div className="carousel-item">
              <img src="./section-img/footwear.jpg" className="d-block w-100" alt="footwear" />
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default BannerTwo;
