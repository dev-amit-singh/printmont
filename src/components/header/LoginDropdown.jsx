import React from "react";
import { FaCoins, FaTruck, FaWallet, FaBoxOpen, FaSignOutAlt, FaRegUser } from "react-icons/fa";

const LoginDropdown = () => {
  return (
    <div className="dropdown-container position-relative d-inline-block">
      {/* Trigger */}
      <div className=" px-3 py-1 border rounded d-flex align-items-center gap-2">
        <FaRegUser color="#007bff" />
        <span className="text-primary fw-semibold">Login</span>
      </div>

      {/* Dropdown */}
      <div className="dropdown-menu-box position-absolute bg-white shadow rounded mt-0">
        <div className="px-3 py-2 border-bottom d-flex justify-content-between">
          <span className="fw-bold">New Customer?</span>
          <a href="/signup" className="text-primary text-decoration-none fw-semibold">Signup</a>
        </div>

        <ul className="list-unstyled mb-0">
          <li className="dropdown-item-custom"><FaCoins className="me-2 text-danger" /> <a href="#" className="text-decoration-none">Printmont Coins</a>
          </li>
          <li className="dropdown-item-custom"><FaRegUser className="me-2 text-primary" /> <a href="#" className="text-decoration-none">My Profile</a></li>
          <li className="dropdown-item-custom"><FaTruck className="me-2 text-info" /> <a href="#" className="text-decoration-none">Track your Order</a></li>
          <li className="dropdown-item-custom"><FaWallet className="me-2 text-warning" /> <a href="#" className="text-decoration-none">Printmont Wallet</a></li>
          <li className="dropdown-item-custom"><FaBoxOpen className="me-2 text-secondary" /> <a href="#" className="text-decoration-none">My Order</a></li>
          <li className="dropdown-item-custom"><FaSignOutAlt className="me-2 text-dark" /> <a href="#" className="text-decoration-none">Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default LoginDropdown;
