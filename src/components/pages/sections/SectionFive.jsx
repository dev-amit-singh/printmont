import React from 'react';
import { homeDecorItems, tablewareItems } from '../../../../data/data';
import { FaChevronRight } from 'react-icons/fa';

const SectionFive  = () => {
  const renderCardGrid = (title, items) => (
    <div className="border bg-white rounded-3 p-3 h-100">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h5 className="mb-0 fw-bold">{title}</h5>
        <FaChevronRight />
      </div>

      {/* Cards Grid */}
      <div className="row g-3">
        {items.map((item, idx) => (
          <div className="col-12 col-sm-6" key={idx}>
            <div className="border rounded-3 p-3 text-center bg-white h-100">
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
        {/* First Column: Tableware */}
        <div className="col-12 col-md-4">
          {renderCardGrid('Tableware & Dinnerware', tablewareItems)}
        </div>

        {/* Second Column: Home Decor */}
        <div className="col-12 col-md-4">
          {renderCardGrid('Home Decor Items', homeDecorItems)}
        </div>

        {/* Third Column: Full Image */}
        <div className="col-12 col-md-4">
          <div className="border bg-white rounded-3 h-100 d-flex align-items-center justify-content-center overflow-hidden">
            <img
              src="./girl-product-img/girl-1.webp"
              alt="Decor Showcase"
              className="img-fluid w-100 h-100"
              style={{
                objectFit: 'cover',
                borderRadius: '8px',
                maxHeight: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
