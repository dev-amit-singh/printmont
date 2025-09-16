import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SectionFourReverse = ({ columns = [] }) => {
  // ✅ Render full image column
  const renderImageColumn = ({ imageUrl, alt = 'Showcase' }) => (
    <div className="border bg-white rounded-3 h-100 d-flex align-items-center justify-content-center overflow-hidden p-0 d-none d-lg-block">
      <img
        src={imageUrl}
        alt={alt}
        className="w-100 h-100 rounded-3"
        style={{
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );

  // ✅ Render product grid cards with larger images & rounded corners
  const renderCardGrid = ({ title, items }) => (
    <div className="border bg-white rounded-3 p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h5 className="mb-0 fw-bold">{title}</h5>
        <div className='border-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fs-5 p-1'>
        <FaChevronRight />
        </div>
      </div>

       <div className="row g-2 g-sm-3 pb-1"> {/* custom-background-image */}
        {items.map((item, idx) => (
          <div className="col-6 p-2" key={idx}>
            <div className="border rounded-3  text-center bg-white h-100">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-3 rounded" // ← Apply Bootstrap border-radius
                style={{
                  maxHeight: '220px', // ← Larger product image
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

  // ✅ Layout wrapper
  return (
    <div className="container-fluid px-md-3 pt-0 custom-bg">
      <div className="row g-2 align-items-stretch">
        {columns.map((col, index) => (
          <div className="col-12 col-lg-4" key={index}>
            {col.type === 'image' ? renderImageColumn(col) : renderCardGrid(col)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFourReverse;
