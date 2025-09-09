import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { FaRegUser, FaUser, FaBoxOpen, FaWallet, FaPaperPlane, FaStore } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { IoSearch, IoSearchSharp } from "react-icons/io5";


const MobileHeader = () => {
  // State to track open dropdowns individually
  const [dropdowns, setDropdowns] = useState({
    giftSets: false,
    stationary: false,
  });

  // Toggle function for dropdowns
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar px-3 py-2 bg-white mt-2">
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn p-0 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <GiHamburgerMenu size={24} />
          </button>

          <img src="./PrintLogo.png" alt="Printmont Logo" style={{ height: '30px', }}/>
          <div className=" nav-searchbar mx-2   small-nav">
            <div className="input-group rounded-md md-input-group border  m-auto">
              <input
              id='global-search'
              name='global_search'
                type="text"
                className="form-control bg-transparent border-0 b"
                placeholder="Search for products, Brands and more"
                aria-label="Search"
              />
              <button name='global_search' className="rounded border-0 bg-transparent me-3 mb-1" type="button">
                <IoSearch size={20} color="rgb(41, 117, 240) " />
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
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
          <a href="/login" className="text-decoration-none  fw-semibold">Login</a>
          </div>
        </div>
        <div className='mt-1 border d-flex flex-col align-items-center justify-content-center nav_search_div search_bar d-md-none gap-sm-0'>
          <input id='searchInput' name='search' typeof="text" className='border-1 nav_search' placeholder='Search for products, Brands and more' />
          <IoSearchSharp className='fs-2' />
        </div>
      </nav>
      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start"
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

            {/* Manual Dropdown 1: Gift Sets */}
            <li className="list-group-item px-3 py-2">
              <div className="d-flex justify-content-between align-items-center" onClick={() => toggleDropdown('giftSets')} style={{ cursor: 'pointer' }}>
                <span>Gift Sets</span>
                <span className="fw-bold fs-5">{dropdowns.giftSets ? '−' : '+'}</span>
              </div>
              {dropdowns.giftSets && (
                <ul className="list-unstyled mt-2 ps-3">
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Corporate Gifts</a></li>
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Employee Gifts</a></li>
                </ul>
              )}
            </li>

            {/* Manual Dropdown 2: Stationary */}
            <li className="list-group-item px-3 py-2">
              <div className="d-flex justify-content-between align-items-center" onClick={() => toggleDropdown('stationary')} style={{ cursor: 'pointer' }}>
                <span>Stationary</span>
                <span className="fw-bold fs-5">{dropdowns.stationary ? '−' : '+'}</span>
              </div>
              {dropdowns.stationary && (
                <ul className="list-unstyled mt-2 ps-3">
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Notebooks</a></li>
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Pens & Pencils</a></li>
                </ul>
              )}
            </li>

            {/* Manual Dropdown 3 */}
            <li className="list-group-item px-3 py-2">
              <div className="d-flex justify-content-between align-items-center" onClick={() => toggleDropdown('eventtwo')} style={{ cursor: 'pointer' }}>
                <span>Event Merchandise</span>
                <span className="fw-bold fs-5">{dropdowns.eventtwo ? '−' : '+'}</span>
              </div>
              {dropdowns.eventtwo && (
                <ul className="list-unstyled mt-2 ps-3">
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Notebooks</a></li>
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Pens & Pencils</a></li>
                </ul>
              )}
            </li>

            {/* Manual Dropdown 4 */}
            <li className="list-group-item px-3 py-2">
              <div className="d-flex justify-content-between align-items-center" onClick={() => toggleDropdown('trophy')} style={{ cursor: 'pointer' }}>
                <span>Trophies</span>
                <span className="fw-bold fs-5">{dropdowns.trophy ? '−' : '+'}</span>
              </div>
              {dropdowns.trophy && (
                <ul className="list-unstyled mt-2 ps-3">
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Notebooks</a></li>
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Pens & Pencils</a></li>
                </ul>
              )}
            </li>

            {/* Manual Dropdown 5 */}
            <li className="list-group-item px-3 py-2">
              <div className="d-flex justify-content-between align-items-center" onClick={() => toggleDropdown('supplies')} style={{ cursor: 'pointer' }}>
                <span>Office Supplies</span>
                <span className="fw-bold fs-5">{dropdowns.supplies ? '−' : '+'}</span>
              </div>
              {dropdowns.supplies && (
                <ul className="list-unstyled mt-2 ps-3">
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Notebooks</a></li>
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Pens & Pencils</a></li>
                </ul>
              )}
            </li>

            {/* Manual Dropdown 6 */}
            <li className="list-group-item px-3 py-2">
              <div className="d-flex justify-content-between align-items-center" onClick={() => toggleDropdown('pens')} style={{ cursor: 'pointer' }}>
                <span>Pens</span>
                <span className="fw-bold fs-5">{dropdowns.pens ? '−' : '+'}</span>
              </div>
              {dropdowns.pens && (
                <ul className="list-unstyled mt-2 ps-3">
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Notebooks</a></li>
                  <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Pens & Pencils</a></li>
                </ul>
              )}
            </li>

            {/* Add more dropdowns manually below using same pattern */}
          </ul>

          {/* Bottom Account Section */}
          <div className="bg-light mt-2 pt-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center gap-2"><FaUser /> My Account</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaBoxOpen /> My Orders</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaPaperPlane /> Track Order</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaWallet /> My Wallet</li>
              <li className="list-group-item d-flex align-items-center gap-2"><FaStore /> Sell On Xordox</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default MobileHeader;
