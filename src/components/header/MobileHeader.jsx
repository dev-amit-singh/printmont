import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  GiHamburgerMenu,
  GiShoppingCart,
} from "react-icons/gi";
import {
  FaRegUser,
  FaUser,
  FaBoxOpen,
  FaWallet,
  FaPaperPlane,
  FaStore
} from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { IoSearch, IoSearchSharp } from "react-icons/io5";

const MobileHeader = () => {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="navbar px-2 py-2 bg-white shadow-sm ">
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn p-0 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <GiHamburgerMenu size={24} />
          </button>

          <img src="./PrintLogo.png" alt="Printmont Logo" style={{ height: '30px' }} />
          <div className="nav-searchbar mx-2 small-nav">
            <div className="input-group rounded-md md-input-group border m-auto">
              <input
                id='global-search'
                name='global_search'
                type="text"
                className="form-control bg-transparent border-0"
                placeholder="Search for products, Brands and more"
                aria-label="Search"
              />
              <button name='global_search' className="rounded border-0 bg-transparent me-3 mb-1" type="button">
                <IoSearch size={20} color="rgb(41, 117, 240)" />
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 gap-md-4">
          <div className="position-relative">
            <CiHeart size={25} color="#007bff" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">3</span>
          </div>

          <div className="position-relative">
            <GiShoppingCart size={25} color="#007bff" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">2</span>
          </div>

          <div className='d-flex align-items-center gap-1 justify-content-center border px-2 py-1 rounded login-button'>
            <FaRegUser size={20} color="#007bff" />
            <a href="/login" className="text-decoration-none fw-semibold">Login</a>
          </div>
        </div>

        <div className='mt-1 border d-flex flex-col align-items-center justify-content-center nav_search_div search_bar d-md-none gap-sm-0'>
          <input id='searchInput' name='search' type="text" className='border-1 nav_search' placeholder='Search for products, Brands and more' />
          <IoSearchSharp className='fs-2' />
        </div>
      </nav>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start w-75"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header bg-primary text-white py-3">
          <div className="d-flex align-items-center gap-2">
            <FaUser />
            <h6 className="mb-0">Login & Signup</h6>
          </div>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body p-0">
          <ul className="list-group rounded-0">
            {/* Dynamically render dropdowns */}
            {Array.from({ length: 8 }, (_, i) => {
              const key = `set${i + 1}`;
              return (
                <li className="list-group-item px-3 py-1" key={key}>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => toggleDropdown(key)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className='text-muted small fw-semibold'>Set {i + 1}</span>
                    <span className="fw-bold fs-5">{dropdowns[key] ? '−' : '+'}</span>
                  </div>
                  {dropdowns[key] && (
                    <ul className="list-unstyled mt-2 ps-3">
                      <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Corporate Gifts</a></li>
                      <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Employee Gifts</a></li>
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Account Section */}
          <div className="bg-light mt-2 pt-1">
            <ul className="list-group list-group-flush m-0 p-0">
              <li className="list-group-item d-flex align-items-center gap-2"><FaUser /> My Account</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaBoxOpen /> My Orders</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaPaperPlane /> Track Order</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaWallet /> My Wallet</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaStore /> Sell On Printmont</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
