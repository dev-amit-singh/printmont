import React from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegUser, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import LoginDropdown from "./LoginDropdown";

function Header() {
  return (
    <>
      <div className="container-fluid  bg-white headon">
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <Navbar expand="lg" className="border-bottom py-2">
            <Container fluid>
              {/* Logo + Toggle (Left) */}
              <Navbar.Brand href="/" className="me-3">
                <img src="/PrintLogo.png" alt="Logo" height="40" className="me-lg-5" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="main-navbar" />

              <Navbar.Collapse id="main-navbar" >
                {/* Center: Search Bar */}
                <div className=" nav-searchbar me-4 rounded border">
                  <div className="input-group">
                    <input
                    id="global-seacrh"
                      type="text"
                      className="form-control bg-transparent border-0 b"
                      placeholder="Search for products, Brands and more"
                      aria-label="Search"
                    />
                    <button className="rounded border-0 bg-transparent me-3 mb-1" type="button">
                      <IoSearch size={20} color="rgb(41, 117, 240) " />
                    </button>
                  </div>
                </div>

                {/* Right: Icons */}
                <Nav className="ms-auto d-flex align-items-center gap-4 text-center">
                  <Nav.Link href="#" className="d-flex align-items-center gap-1">
                    <div className="position-relative">
                      <CiHeart size={25} color="#007bff" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">3</span>
                    </div>
                  </Nav.Link>

                  <Nav.Link href="#" className="d-flex align-items-center gap-1">
                    <div className="position-relative">
                      <GiShoppingCart size={25} color="#007bff" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">2</span>
                    </div>
                  </Nav.Link>

                  <div className="d-flex align-items-center gap-1 nav-link">
                    <LoginDropdown />
                  </div>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default Header;
