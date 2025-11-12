"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => {
    setMenuActive(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* ===== Left Logo ===== */}
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/images/LOGO_01.jpg"
              alt="Bath Solution Logo"
              width={90}
              height={55}
              className="logo-img"
            />
          </Link>
        </div>

        {/* ===== Center Navigation Links ===== */}
        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          {/* ===== Dropdown Menu ===== */}
          <li
            className={`dropdown ${dropdownOpen ? "open" : ""}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products
              <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </button>

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li>
                <Link href="/products/galaxy-hot-spa" onClick={closeMenu}>
                  Galaxy Hot Spa
                </Link>
              </li>
              <li>
                <Link href="/products/galaxy-round-spa" onClick={closeMenu}>
                  Galaxy Round Spa
                </Link>
              </li>
              <li>
                <Link href="/products/seagull-w" onClick={closeMenu}>
                  Seagull W
                </Link>
              </li>
              <li>
                <Link href="/products/oscar" onClick={closeMenu}>
                  Oscar
                </Link>
              </li>
              <li>
                <Link href="/products/lancer" onClick={closeMenu}>
                  Lancer
                </Link>
              </li>
              <li>
                <Link href="/products/oscar-deluxe" onClick={closeMenu}>
                  Oscar Deluxe
                </Link>
              </li>
              <li>
                <Link href="/products/elanza" onClick={closeMenu}>
                  Elanza
                </Link>
              </li>
              <li>
                <Link href="/products/turbo-xl-deluxe" onClick={closeMenu}>
                  Turbo XL Deluxe
                </Link>
              </li>
              <li>
                <Link href="/products/rossette" onClick={closeMenu}>
                  Rossette
                </Link>
              </li>
              <li>
                <Link href="/products/utility" onClick={closeMenu}>
                  Utility
                </Link>
              </li>
              <li>
                <Link href="/products/regular" onClick={closeMenu}>
                  Regular
                </Link>
              </li>
              <li>
                <Link href="/products/caesar" onClick={closeMenu}>
                  Caesar
                </Link>
              </li>

              {/* ===== View All Products ===== */}
              <li className="view-all">
                <Link href="/products" onClick={closeMenu}>
                  View All Products →
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* ===== Right Search Bar ===== */}
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* ===== Hamburger for Mobile ===== */}
        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* ===== Overlay for Mobile ===== */}
      <div
        className={`overlay ${menuActive ? "show" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}
