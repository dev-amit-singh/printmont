import React, { useState, useEffect } from 'react';
import { categoriesImg } from '../../../../data/data'; // your data source

const Categories = () => {
  const [visibleCount, setVisibleCount] = useState(14); // Default for large screens

  // Responsive visibility logic
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setVisibleCount(5); // Extra small (xs)
      } else if (width < 768) {
        setVisibleCount(8); // Small (sm)
      } else {
        setVisibleCount(14); // Medium and above
      }
    };

    updateVisibleCount(); // On mount
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  return (

   <> 
   <div className="container-fluid bg-white p-3 bg-white m-0">
  {/* For small and medium: scrollable row */}
  <div className="d-flex d-lg-none overflow-auto gap-0 gap-md-3  px-md-2">
    {categoriesImg.map((item, index) => (
      <div
        key={index}
        className="d-flex flex-column align-items-center text-center flex-shrink-0"
        style={{ width: '70px' }}
      >
        <img
          src={item.img}
          alt={item.name}
          className="rounded mb-1 border"
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'cover',
          }}
        />
        <small className="text-wrap w-100 ">{item.name}</small>
      </div>
    ))}
  </div>

  {/* For large screens: wrap items and center them */}
  <div className="d-none d-lg-flex flex-wrap justify-content-around gap-3 px-2">
    {categoriesImg.map((item, index) => (
      <div
        key={index}
        className="d-flex flex-column align-items-center text-center"
        style={{ width: '70px' }}
      >
        <img
          src={item.img}
          alt={item.name}
          className="rounded mb-1 border"
          style={{
            width: '70px',
            height: '70px',
            objectFit: 'cover',
          }}
        />
        <small className="text-truncate w-100">{item.name}</small>
      </div>
    ))}
  </div>
</div>

   </>
  );
};

export default Categories;
