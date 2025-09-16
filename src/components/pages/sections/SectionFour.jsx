import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SectionFour = ({ columns = [], imageColumn, backgroundImageUrl }) => {
  const renderCardGrid = (title, items) => (
    <div
  className="border bg-white rounded-3 p-3 h-100-white custom-bg-image"
  style={
    backgroundImageUrl
      ? { backgroundImage: `url(${backgroundImageUrl})` }
      : {}
  }
>

      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <p className="mb-0 section-title fw-semibold text-black">{title}</p>
        <button className='border-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fs-5 p-1'><FaChevronRight /></button>
      </div>

      <div className="row g-sm-0 g-1 ">
        {items.map((item, idx) => (
          <div className="col-6 mb-0 mb-lg-0 g-1" key={idx}>
            <div className="border rounded-3 p-1 text-center bg-white  h-100">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-2 bg-white"
                style={{
                  maxHeight: '220px', // ← Increased from 150px
                  objectFit: 'contain',
                }}
              />
              <h6 className="fw-semibold section-product-name mb-1">{item.title}</h6>
              <p className="text-muted mb-0 section-product-name ">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container-fluid px-md-1 py-0 bg-white m-0">
      <div className="row g-0 g-md-1 align-items-stretch p-0 m-0"
      >
        {/* Product Columns */}
        {columns.map((col, index) => (
          <div className="col-12 col-sm-6 col-md-12 col-lg-4" key={index}
          >
            {renderCardGrid(col.title, col.items)}
          </div>
        ))}

        {/* Image Column (optional, not main focus now) */}
        {imageColumn && (
          <div className="col-12 col-sm-12 col-md-12 col-lg-4  ">
            <div className="border rounded-3 h-100 overflow-hidden p-0">
              <img
                src={imageColumn.imageUrl}
                alt={imageColumn.alt || 'Showcase'}
                className="w-100 h-100 zoom-hover"
                style={{
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div className='d-flex d-lg-none' >
        <a href="# " className="w-100 p-2 rounded mt-2 btn btn-primary fs-6 ">View More  <span>&gt;</span></a>
        {/* <button className="w-100 p-2 rounded mt-2 btn btn-primary fs-6">View More</button> */}
      </div>
    </div>
  );
};

export default SectionFour;
