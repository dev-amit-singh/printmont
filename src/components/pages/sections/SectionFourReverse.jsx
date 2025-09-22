import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SectionFourReverse = ({ columns = [] }) => {
  // ✅ Render full image column
  const renderImageColumn = ({ imageUrl, alt = 'Showcase' }) => (
    <div className="border bg-white rounded-3 h-100 d-flex align-items-center justify-content-center overflow-hidden p-1 d-none d-lg-block">
      <img
        src={imageUrl}
        alt={alt}
        className="w-100 h-100 rounded-3"
        style={{
          objectFit: 'contain',
          display: 'block',
          // maxHeight: '560px',
        }}
      />
    </div>
  );

  // ✅ Render product grid cards
  const renderCardGrid = ({ title, items }) => (
    <div className="border cus-bg rounded-3 p-1 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center px-2 mb-2">
        <h5 className="mb-0 fw-bold">{title}</h5>
        <div className='border-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fs-5 p-1'>
          <FaChevronRight />
        </div>
      </div>

      <div className="row g-0 g-lg-1 flex-grow-3 p-3">
        {items.map((item, idx) => (
          <div className="col-6  gap-1 m-0" key={idx}>
            <div className='mb-1'>
              <div className="border rounded-3 text-center cus-bg h-100 p-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid m rounded"
                  style={{
                    maxHeight: '180px',
                    objectFit: 'contain',
                  }}
                />
                <h6 className="fw-bold mb-1">{item.title}</h6>
                <p className="text-muted m-0">{item.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ✅ Layout wrapper
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row g-1 m-0 p-0 align-items-stretch">
        {columns.map((col, index) => (
          <div className="col-12 col-lg-4 d-flex" key={index}>
            <div className="w-100 h-100">
              {col.type === 'image' ? renderImageColumn(col) : renderCardGrid(col)}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SectionFourReverse;
