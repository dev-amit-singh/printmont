import React, { useState, useRef } from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { GoHeart } from "react-icons/go";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FcAdvertising, FcCustomerSupport } from "react-icons/fc";

import { IoSearch } from "react-icons/io5";
import LoginDropdown from "./LoginDropdown";
import MobileHeader from "./MobileHeader";

function Header() {
  const [showPreferences, setShowPreferences] = useState(false);
  const preferenceRef = useRef();

  return (
    <>
    <div className="d-none d-lg-flex">
      <div className="container-fluid bg-white headon">
        <div className="container-fluid d-flex justify-content-around align-itemsz-center">
          <Navbar expand="lg" className="border-bottom py-2">
            <Container fluid>
              {/* Logo + Toggle (Left) */}
              <Navbar.Brand href="/" className="me-3">
                <img src="/PrintLogo.png" alt="Logo" height="40" className="me-lg-5" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="main-navbar" />

              <Navbar.Collapse id="main-navbar">
                {/* Center: Search Bar */}
                <div className="nav-searchbar me-4 rounded border">
                  <div className="input-group">
                    <input
                      id="global-seacrh"
                      type="text"
                      className="form-control bg-transparent border-0"
                      placeholder="Search for products, Brands and more"
                      aria-label="Search"
                    />
                    <button className="rounded border-0 bg-transparent me-3 mb-1" type="button">
                      <IoSearch size={20} color="rgb(41, 117, 240)" />
                    </button>
                  </div>
                </div>

                {/* Right: Icons */}
                <Nav className="ms-auto d-flex align-items-center gap-2 text-center">
                  <Nav.Link href="/user/wishlist" className="d-flex align-items-center gap-2">
                    <div className="position-relative">
                      <GoHeart size={25} color="#007bff" />
                      <div className="notify-mes"><span className="notify-num">4</span></div>
                    </div>
                    <span className="fs-6 ms-2">Wishlist</span>
                  </Nav.Link>

                  <Nav.Link href="/cart" className="d-flex justify-content-center align-items-center gap-2">
                    <div className="position-relative">
                      <GiShoppingCart size={30} color="#007bff" />
                      <div className="notify-mes">
                        <span className="notify-num">4</span>
                      </div>
                    </div>
                    <span className="fs-6">Cart</span>
                  </Nav.Link>

                  <div className="d-flex align-items-center gap-1 nav-link">
                    <LoginDropdown />
                  </div>

                  {/* Hover-based Three Dots Menu */}
                  <div
                    className="position-relative rounded"
                    ref={preferenceRef}
                    onMouseEnter={() => setShowPreferences(true)}
                    onMouseLeave={() => setShowPreferences(false)}
                    style={{ cursor: "pointer" }}
                  >
                    <PiDotsThreeOutlineVerticalFill size={24} className="p-1 text-primary" />

                    {showPreferences && (
                      <div className="dropdown-menu show preference-menu position-absolute end-1 top-20 z-3 d-block min-w-200 p-2  shadow rounded bg-white border-0">
                        <div className="dropdown-item"><span><LuChartNoAxesCombined size={18} />
                        </span> Become a Seller</div>
                        <div className="dropdown-item"><span><IoMdNotifications size={18} color="f8d830"/>
                        </span> Notification Preferences</div>
                        <div className="dropdown-item"><span><FcCustomerSupport size={18}/>
                        </span> 24x7 Customer Care</div>
                        <div className="dropdown-item"><span><FcAdvertising size={18}/>
                        </span> Advertise</div>
                      </div>
                    )}
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
    <div className="d-block d-lg-none sticky-navbar">
        <MobileHeader/>
      </div>
    </>
  );
}

export default Header;
