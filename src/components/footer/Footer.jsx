import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaBullhorn,
  FaQuestionCircle,
  FaRupeeSign,
  FaStore,
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import MobileFooter from "./MobileFooter";
import Ico from "./ico";

const Footer = () => {
  return (
    <>
      <div className="d-none d-lg-block"><Ico/></div>
      <footer className="foot-bg text-light pt-5 pb-2 small-screen-foot">
        <div className="container-fluid px-5">
          <div className="row g-4">
            {/* First section: All link groups */}
            <div className="col-12 col-lg-6">
              <div className="row g-4">
                {/* Our Company */}
                <div className="col-6 col-md-3 ">
                  <h6 className="text-uppercase medium text-white-50">Our Company</h6>
                  <ul className="list-unstyled txsm d-flex flex-column gap-1">
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Affiliate Program</li>
                    <li>Blog</li>
                  </ul>
                </div>


                <div className="col-6 col-md-3">
                  <h6 className="text-uppercase medium text-white-50">Policy Info</h6>
                  <ul className="list-unstyled txsm d-flex flex-column gap-1">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                    <li>Return & Refund Policy</li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="col-6 col-md-3">
                  <h6 className="text-uppercase medium text-white-50">Quick Links</h6>
                  <ul className="list-unstyled txsm d-flex flex-column gap-1">
                    <li>Help Center</li>
                    <li>Security</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                  </ul>
                </div>


                {/* Support */}
                <div className="col-6 col-md-3">
                  <h6 className="text-uppercase medium text-white-50">Support</h6>
                  <ul className="list-unstyled txsm d-flex flex-column gap-1">
                    <li>Account Settings</li>
                    <li>My Orders</li>
                    <li>My Wallet</li>
                    <li>Track Orders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Second section: Address and Subscribe */}
            <div className="col-12 col-lg-6 wbd border-start border-light ps-4 ">
              <div className="row g-4">
                {/* Address */}
                <div className="col-12 col-md-6">
                  <h6 className="medium text-white-50">Registered Address:</h6>
                  <address className="txsm">
                    Xordox International Pvt. Ltd.,<br />
                    3398, Bagichi Acchi ji Bara Hindu Rao,<br />
                    Near Filmistan Cinema, New Delhi 110006,<br />
                    New Delhi, India<br />
                    Customer Care:{" "}
                    <a href="tel:+919818532463" className="text-white">
                      +91-9818532463
                    </a>
                  </address>

                  <div className="mt-2 d-flex flex-column justify-content-start align-items-start">
                    <span className="small text-white-50">Follow Us:</span>
                    <div className="d-flex justify-content-center gap-2 my-2">
                      <a href="#" className="social-icon facebook"><FaFacebookF className="fs-5" /></a>
                      <a href="#" className="social-icon twitter"><FaXTwitter /></a>
                      <a href="#" className="social-icon instagram"><FaInstagram className="fs-3" /></a>
                      <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
                      <a href="#" className="social-icon youtube"><FaYoutube className="fs-5" /></a>

                    </div>
                  </div>
                </div>

                {/* Subscribe */}
                <div className="col-12 col-md-6">
                  <h6 className="small">Subscribe</h6>
                  <form className="d-flex">
                    <input
                      id="con-email"
                      type="email"
                      placeholder="Email Address"
                      className="form-control rounded-0"
                    />
                    <button className="btn btn-secondary rounded-0">Submit</button>
                  </form>
                  <small className="text-gray d-block mt-2">
                    Get updates on new products and offers Coupons
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-light border-1 my-4" />

          {/* Bottom row */}
          <div className="row text-center text-md-start align-items-center gy-3">
            <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center justify-content-md-start gap-3 small">
              <span>
                <FaStore /> Become a Seller
              </span>
              <span>
                <FaBullhorn /> Advertising
              </span>
              <span>
                <FaRupeeSign /> Printmont Coins
              </span>
              <span>
                <FaQuestionCircle /> Help Center
              </span>
            </div>
            <div className="col-12 col-md-3 small text-center">
              © 2019-2024 printmont.com All Rights Reserved.
            </div>
            <div className="col-12 col-md-3 text-center text-md-end">
              <img
                src="./payment-method.svg"
                alt="Payment Methods"
                className="img-fluid"
                style={{ maxHeight: "32px" }}
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="big-screen-foot">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
