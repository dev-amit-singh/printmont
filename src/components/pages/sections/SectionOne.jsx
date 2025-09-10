import React from 'react';

const banners = [
  '/section-img/banner1.jpg',
  '/section-img/banner2.jpg',
  '/section-img/banner2.jpg',
  '/section-img/banner4.jpg',
];

const SectionOne = () => {
  return (
    <div className="container-fluid py-3 bg-light">
      <div className="row g-3 px-0 px-md-3 ">
        {banners.map((src, index) => (
          <div className="col-6 col-lg-3" key={index}>
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="img-fluid rounded shadow-sm w-100 "
              style={{ height: 'auto', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
