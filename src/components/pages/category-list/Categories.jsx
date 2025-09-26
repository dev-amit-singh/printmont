import React from 'react';
import { TbCategory2 } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { categoriesData } from '../../../../data/data'; // Imported data

const Categories = () => {
  return (
    <div className="container-fluid bg-white p-3 m-0">
      {/* SMALL SCREENS */}
      <div className="d-flex d-lg-none overflow-x-auto gap-0 gap-md-3 px-md-2 align-items-center hide-scrollbar position-relative">
        {/* <div > */}
          <div
          className="d-flex flex-column align-items-center text-center flex-shrink-0 bg-white p-1 border-end border border-white me-1 sticky-sticky"
          style={{
            width: '70px',
            position:"sticky",
            left: '-2px',
            zIndex: 100,
            height: '75px',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
          }}
        >
          <TbCategory2 size={24} className="mb-1 text-primary" />
          <small className="fw-semibold text-primary">Category</small>
        </div>
        {/* </div> */}

        {categoriesData.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center text-center flex-shrink-0 p-1"
            style={{ width: '70px', height: '75px' }}
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
            <small
              className="text-truncate w-100 fw-bold txex text-muted"
              style={{ maxWidth: '100%' }}
            >
              {item.name}
            </small>
          </div>
        ))}
      </div>

      {/* LARGE SCREENS */}
      <div className="d-none d-lg-flex flex-wrap justify-content-center gap-4 px-2">
        {categoriesData.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center text-center mb-3"
            style={{ width: '80px' }}
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
            <Link to={item.url} className="d-flex justify-content-center align-items-start text-decoration-none">
              <small className="w-100 text-body-secondary txsm fw-semibold">{item.name}</small>
              <IoIosArrowDown />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
