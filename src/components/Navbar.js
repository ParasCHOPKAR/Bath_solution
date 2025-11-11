"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Left Logo */}
        <div className="navbar-logo">
          <Image
            src="/images/LOGO_01.jpg"
            alt="Bath Solution Logo"
            width={90}
            height={55}
            className="logo-img"
          />
        </div>

        {/* Center Navigation Links */}
        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Right Search Bar */}
{/* Search Bar */}
<div className="navbar-search">
  <input type="text" placeholder="Search..." />
  <button>
    <i className="fas fa-search"></i> {/* FontAwesome icon */}
  </button>
</div>


        {/* Hamburger for Mobile */}
        <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      <div className={`overlay ${menuActive ? "show" : ""}`} onClick={closeMenu}></div>
    </>
  );
}
