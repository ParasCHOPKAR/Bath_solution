"use client";
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="sticky-footer">
      <div className="footer-overlay">
        <div className="footer-container">
          
          {/* ===== About Section ===== */}
          <div className="footer-section about">
            <img src="/images/LOGO_01.jpg" alt="Bathsolution Logo" className="footer-logo" />
            <hr className="footer-line" />
            <h3>About</h3>
            <p>
              Bathsolution, India’s first bathroom renovation company, delivers expert bathroom remodels with
              premium designs, quality materials, and seamless end-to-end service.
            </p>
          </div>

          {/* ===== Menu ===== */}
          <div className="footer-section">
            <h3>Menu</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* ===== Services ===== */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Noida</li>
              <li>Delhi/NCR</li>
              <li>Dehradun</li>
              <li>Chandigarh</li>
              <li>Raipur</li>
              <li>Kanpur</li>
              <li>Aligarh</li>
            </ul>
          </div>

          {/* ===== Get In Touch ===== */}
          <div className="footer-section">
            <h3>Get in touch</h3>
            <p>
              Connect with Bathsolution, India’s first bathroom renovation company, for premium remodel services.
              We deliver stylish designs, seamless execution, and stress-free bathroom transformations tailored
              to your lifestyle, needs, and budget.
            </p>
            <button className="footer-btn">Talk To Our Expert</button>

            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* ===== Divider + Copyright Line ===== */}
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2025 Bathsolution. All rights reserved.</p>
          <p>Developed By <span className="dev-name">DW INNOVATION PVT. LTD.</span></p>
        </div>
      </div>
    </section>
  );
}
