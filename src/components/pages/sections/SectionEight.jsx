import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SectionEight = ({ columns = [], imageColumn }) => {
  // Render one card group (e.g. Mobile, Laptop, EarPhone)
  const renderCardGrid = (title, items) => (
    <div className="border bg-white rounded-3 p-3 h-100">
      {/* Title and right arrow button */}
      <div className="d-flex justify-content-between align-items-center mb-3 px-1">
        <h5 className="mb-0 fw-bold">{title}</h5>
        <button
          className="border-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: '32px', height: '32px' }}
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      {/* Grid of cards (2 per row) */}
      <div className="row g-2">
        {items.map((item, idx) => (
          <div className="col-6" key={idx}>
            <div className="border rounded-3 p-2 text-center bg-white h-100">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-2"
                style={{
                  maxHeight: '150px',
                  objectFit: 'contain',
                }}
              />
              <h6 className="fw-bold mb-1">{item.title}</h6>
              <p className="text-muted mb-0">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container-fluid px-md-3 py-3 custom-bg">
      <div className="row g-3 align-items-stretch">
        {/* Loop through each product section */}
        {columns.map((col, index) => (
          <div className="col-12 col-sm-6 col-md-12 col-lg-4" key={index}>
            {renderCardGrid(col.title, col.items)}
          </div>
        ))}

        {/* Optional image column */}
        {imageColumn && (
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="border bg-white rounded-3 h-100 overflow-hidden p-0">
              <img
                src={imageColumn.imageUrl}
                alt={imageColumn.alt || 'Showcase'}
                className="w-100 h-100"
                style={{
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <button className='btn btn-primary d-flex justify-content-center align-items-center d-lg-none w-100'>View All</button>
      </div>
    </div>
  );
};

export default SectionEight;
