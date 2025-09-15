import React from 'react';

const banners = [
  '/banners/banner-901.png',
  '/banners/banner-902.png',
  '/banners/banner-905.png',
  '/banners/banner-904.png',
];

const SectionOne = () => {
  return (
    <div className="container-fluid py-2">
      <div className="row g-1 px-0 px-md-3">
        {banners.map((src, index) => (
          <div className="col-6 col-lg-3 rounded-md" key={index}>
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
