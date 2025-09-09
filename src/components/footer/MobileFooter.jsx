import React from "react";
import {
    FaTruck,
    FaShieldAlt,
    FaCertificate,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

const MobileFooter = () => {
    return (
        <div className="mobile-footer text-center p-3 bg-light">
            {/* Top Icons with Text */}
            <div className="d-flex justify-content-around text-center mb-3">
                <div>
                    <FaTruck size={30} className="text-primary mb-1" />
                    <p className="small mb-0 fw-semibold">Free Shipping.</p>
                    <p className="text-muted small">No one rejects Dislike.</p>
                </div>
                <div>
                    <FaShieldAlt size={30} className="text-success mb-1" />
                    <p className="small mb-0 fw-semibold">Online Payment.</p>
                    <p className="text-muted small">100% secure payment.</p>
                </div>
                <div>
                    <FaCertificate size={30} className="text-primary mb-1" />
                    <p className="small mb-0 fw-semibold">100% Original</p>
                    <p className="text-muted small">Guaranteed products</p>
                </div>
            </div>

            {/* Rounded Buttons */}
            <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                <button className=" px-3 py-2 btn-small-text">
                    CONTACT US
                </button>
                <button className=" px-3 btn-small-text">
                    QUICK LINKS
                </button>
                <button className=" px-3 btn-small-text">
                    HELP NOW
                </button>

            </div>

            {/* Logo */}
            <img src="/PrintLogo.png" alt="Xordox Logo" className="my-3" style={{ height: 40 }} />

            {/* Secure Text */}
            <div className="mb-2">
                <PiShieldCheckFill size={28} className="text-primary" />
                <p className="mb-0 fw-semibold mt-1">100% Safe and secure payments.</p>
            </div>

            {/* Social Media */}
            <div className="d-flex justify-content-center gap-3 my-3">
                <a href="#" className="social-icon facebook"><FaFacebookF className="fs-5"/></a>
                <a href="#" className="social-icon twitter"><FaXTwitter /></a>
                <a href="#" className="social-icon instagram"><FaInstagram className="fs-3"/></a>
                <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
                <a href="#" className="social-icon youtube"><FaYoutube className="fs-5"/></a>

            </div>

            {/* Copyright */}
            <p className="text-muted small mb-0">
                © Copyright 2019 - 2024 Xordox.com All Rights Reserved.
            </p>
        </div>
    );
};

export default MobileFooter;
