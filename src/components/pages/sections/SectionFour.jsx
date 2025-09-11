import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SectionFour = ({ columns = [], imageColumn }) => {
  const renderCardGrid = (title, items) => (
    <div className="border bg-white rounded-3 p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h5 className="mb-0 fw-bold">{title}</h5>
        <FaChevronRight />
      </div>

      <div className="row g-2 g-sm-3">
        {items.map((item, idx) => (
          <div className="col-6 " key={idx}>
            <div className="border rounded-3 p-3 text-center bg-white h-100 ">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-2"
                style={{ maxHeight: '150px', objectFit: 'contain' }}
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
      <div className="row g-4" style={{ alignItems: 'stretch' }}>
        {columns.map((col, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={index}>
            {renderCardGrid(col.title, col.items)}
          </div>
        ))}

        {imageColumn && (
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 big-img-main">
            <div className="border bg-white rounded-3 h-100 d-flex align-items-center justify-content-center overflow-hidden">
              <img
                src={imageColumn.imageUrl}
                alt={imageColumn.alt || 'Showcase'}
                className="img-fluid w-100 h-100"
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                  maxHeight: '100%',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionFour;
