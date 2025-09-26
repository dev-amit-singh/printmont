import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { MdArrowForwardIos, MdKeyboardArrowRight } from 'react-icons/md';

const SectionFour = ({ columns = [], imageColumn, backgroundImageUrl }) => {
  const renderCardGrid = (title, items) => (
    <div                                    //carf main card
  className="border bg-white rounded-3 p-3 h-100 custom-bg-image"
  style={
    backgroundImageUrl
      ? { backgroundImage: `url(${backgroundImageUrl})` }
      : {}
  }
>

      <div className="d-flex justify-content-between align-items-center mb-3 mt-4 mt-lg-0 px-3 ">
        <p className="m-0 section-title fw-semibold text-black">{title}</p>
        <button className='border-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fs-5 p-1'><FaChevronRight /></button>
      </div>

      <div className="row g-sm-0 g-1 m-0 p-0">
        {items.map((item, idx) => (
          <div className="col-6 mb-0 mb-lg-0 g-1" key={idx}>
            <div className="border bg-white rounded-3 p-2 p-lg-1 text-center cus-bg h-100 d-flex justify-content-between align-items-center flex-column">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-2 bg-white zoom-hover"
                style={{
                  maxHeight: '180px', // ← Increased from 150px
                  objectFit: 'contain',
                }}
              />
              <div>
                <h6 className="fw-semibold section-product-name mb-1">{item.title}</h6>
              <p className="text-lg-muted mb-0 section-product-name text-success fw-bold">{item.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-1 m-0">
      <div className="row g-1  align-items-stretch"
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
            <div className="border rounded-3 h-100 overflow-hidden p-2 cus-bg">
              <img
                src={imageColumn.imageUrl}
                alt={imageColumn.alt || 'Showcase'}
                className="w-100 h-auto"
                style={{
                  objectFit: 'cover',
                  maxHeight: '560px',
                  display: 'block',
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div className='p-1'>
        <div className='d-flex d-lg-none w-100 justify-content-center align-items-center border bd rounded' >
        <a href="# " className="w-100 py-2 shadow-lg text-center text-decoration-none text-dark small">View More  <span><MdKeyboardArrowRight size={18}/></span></a>        
      </div>
      </div>
    </div>
  );
};

export default SectionFour;
