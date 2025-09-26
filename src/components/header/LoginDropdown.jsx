import React from "react";
import { FaCoins, FaTruck, FaWallet, FaBoxOpen, FaSignOutAlt, FaRegUser } from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const LoginDropdown = () => {
  return (
    <div className="dropdown-container position-relative d-inline-block">
      {/* Trigger */}
      <div className=" px-3 py-1 border rounded d-flex align-items-center gap-2">
        <FaRegUser color="#007bff" />
        <a href="/login" className="text-primary fw-semibold text-decoration-none">Login</a>
      </div>

      {/* Dropdown */}
      <div className="dropdown-menu-box position-absolute bg-white shadow rounded mt-0">
        <div className="px-3 py-2 border-bottom d-flex justify-content-between">
          <span className="fw-bold">New Customer?</span>
          <a href="/signup" className="text-primary text-decoration-none fw-semibold">Signup</a>
        </div>

        <ul className="list-unstyled mb-0">
          <li className="dropdown-item-custom"><FaCoins className="me-2 text-danger"/>
          <Link to={'#'} className="text-decoration-none">Printmont Coins</Link>
          </li>
          <li className="dropdown-item-custom"><FaRegUser className="me-2 text-primary" /> <Link to={'/user/profile'} className="text-decoration-none">My Profile</Link></li>
          <li className="dropdown-item-custom"><FaTruck className="me-2 text-info" /> <Link to={'#'} className="text-decoration-none">Track Your Orders</Link></li>
          <li className="dropdown-item-custom"><FaWallet className="me-2 text-warning" /> <Link to={'#'} className="text-decoration-none">Printmont Wallet</Link></li>
          <li className="dropdown-item-custom"><FaBoxOpen className="me-2 text-secondary" /> <Link to={'/orders'} className="text-decoration-none">My Orders</Link></li>
          <li className="dropdown-item-custom"><FaSignOutAlt className="me-2 text-dark" /> <Link to={'#'} className="text-decoration-none">Log Out</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default LoginDropdown;
