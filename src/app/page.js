"use client"; // must always be the first line

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./page.css";
import styles from "./page.module.css"; // CSS Module for Bath Solutions section

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [current, setCurrent] = useState(0);

  // ================= HERO SLIDER IMAGES =================
  const heroImages = [
    "/images/hero_01.jpg",
    "/images/hero_02.png",
    "/images/about_02.jpg",
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToSlide = (index) => setCurrent(index);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % heroImages.length);

  // ================= ACCORDION ITEMS =================
  const items = [
    {
      title: "Premium Bathroom Designs",
      content:
        "We craft modern and luxurious bathroom interiors tailored to your space and lifestyle. Every design ensures elegance, comfort, and functionality.",
  image: "/images/about_03.jpg",
    },
    {
      title: "High-Quality Fixtures",
      content:
        "Choose from a curated selection of top-tier fittings and fixtures that guarantee durability, water efficiency, and timeless appeal.",
      image: "/images/about_01.jpg",
    },
    {
      title: "End-to-End Installation",
      content:
        "Our experts handle everything from plumbing to tiling, ensuring a hassle-free and perfectly executed bathroom transformation.",
      image: "/images/about_02.jpg",
    },
    {
      title: "Warranty & Support",
      content:
        "Enjoy peace of mind with our service warranty and reliable after-sales support for maintenance and upgrades.",
      image: "/images/about_03.jpg",
    },
  ];

  // ================= PRODUCT CARDS =================
  const products = [
    {
      id: 1,
      title: "Luxury Bath Tubs",
      desc: "Experience ultimate relaxation with our premium acrylic whirlpool and spa bathtubs.",
      img: "/images/about_03.jpg",
    },
    {
      id: 2,
      title: "Steam & Sauna Systems",
      desc: "Transform your home into a rejuvenating wellness retreat with advanced steam technology.",
      img: "/images/about_02.jpg",
    },
    {
      id: 3,
      title: "Rain Showers & Panels",
      desc: "Immerse yourself in a luxurious shower experience with our smart rain panels.",
      img: "/images/about_03.jpg",
    },
    {
      id: 4,
      title: "Smart Toilets & Accessories",
      desc: "Upgrade your bathroom with our elegant, automated hygiene systems.",
      img: "/images/about_02.jpg",
    },
  ];

  // ================= FADE-IN EFFECT =================
  useEffect(() => {
    const sections = document.querySelectorAll(".product-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
          else entry.target.classList.remove("show");
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      {/* ========================== HERO SECTION (Slider) =========================== */}
      <section className="hero">
        {/* Background Slides */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            Redefine <span className="gold-text">Luxury</span> in Every Bath
          </h1>
          <p>
            Discover premium bathroom fittings, modern designs, and elegant
            finishes crafted for sophistication.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn btn-gold">
              Explore Products
            </a>
            <a href="#contact" className="btn btn-outline">
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Arrows */}
        <button className="hero-arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="hero-arrow right" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Dots */}
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* ========================== ABOUT US SECTION =========================== */}
      <section className="about-section" id="about">
        <div className="about-wrapper">
          <div className="about-left">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              Galaxy Bath Solution was formed in 2012 with the brand Coral range
              of bathtubs, whirlpool massage jets, and steam sauna systems. Our
              expertise ensures every product transforms your bath into a luxury
              spa experience that enhances your mood and pleasure.
            </p>
            <p className="about-text">
              Galaxy Bath Solution is revolutionizing bathrooms and is all set
              to become a household name soon.
            </p>
            <a href="#about-video" className="btn btn-gold about-btn">
              Learn More
            </a>
          </div>

          <div className="about-right">
            <div className="about-slider">
              <div className="slider-track">
                <img src="/images/hero_02.png" alt="Luxury Bathtub" />
                <img src="/images/hero_02.png" alt="Modern Spa" />
                <img src="/images/hero_02.png" alt="Steam Sauna" />
                <img src="/images/hero_02.png" alt="Whirlpool Tub" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== HOME SOLUTIONS =========================== */}
      <section className="home-solutions">
        <div className="solution-card">
          <div className="image-container">
            <Image
              src="/images/hero_01.jpg"
              alt="Bath Solutions"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="solution-image"
            />
          </div>

          <div className="solution-content">
            <h2>BATH SOLUTIONS</h2>
            <p>
              Aesthetically designed complete bathroom solutions to make your
              bath space more relaxing & refreshing.
            </p>
            <a href="#">Know More →</a>
          </div>
        </div>

        <div className="solution-card">
          <div className="image-container">
            <Image
              src="/images/hero_02.png"
              alt="Galaxy Family Fun Spa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="solution-image"
            />
          </div>

          <div className="solution-content">
            <h2>Galaxy Family Fun Spa</h2>
            <p>
              Front Panel | Standard Massage system with 6 jets | Spinal 1 Jet |
              1.5HP imported motor with PN on/off | Coupling Pressure Control
              Switch |
            </p>
            <a href="#">Know More →</a>
          </div>
        </div>
      </section>

      {/* ========================== PRODUCTS SECTION =========================== */}
<section id="products" className="products-wrapper">
  <h2 className="products-title">Our Premium Products</h2>

  <div className="products-grid">
    {products.map((item) => (
      <div key={item.id} className="product-card">
        <div className="product-image">
          <Image
            src={item.img}
            alt={item.title}
            width={400}
            height={250}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="product-info">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <a href="#" className="learn-btn">
            Learn More →
          </a>
        </div>
      </div>
    ))}
  </div>

  <div className="view-all">
    <a href="#all-products" className="view-all-btn">
      View All Products
    </a>
  </div>
</section>


      {/* ========================== VIDEO SECTION =========================== */}
      <section id="about-video">
        <div className="about-video">
          <video
            className="luxury-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src="/video/video_01.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      </section>

      {/* ========================== BATH SOLUTIONS (ACCORDION) =========================== */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Bath Solutions</h2>

            <div className={styles.accordion}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <h3>{item.title}</h3>
                    <span>{activeIndex === index ? "–" : "+"}</span>
                  </div>

                  <div
                    className={styles.accordionContent}
                    style={{
                      maxHeight: activeIndex === index ? "200px" : "0",
                    }}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <img
              src={items[activeIndex]?.image}
              alt={items[activeIndex]?.title}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* ========================== CLIENTS SECTION =========================== */}
      <section className="clients-section" id="clients">
        <div className="clients-container">
          <h2 className="clients-title">Our Esteemed Clients</h2>
          <p className="clients-subtitle">
            Trusted by top builders, developers, fitness centers, and luxury
            spas across India.
          </p>

          <div className="clients-slider">
            <div className="clients-track">
              {[
                "Nirman Developers",
                "Nanded City Rhythm",
                "Amar Builders",
                "Marvel Realtors",
                "Nyati Group",
                "Paranjape Builders",
                "Pune Airport Authority",
                "VTP Realtors",
                "Gokhale Constructions",
                "Karan Developers",
                "Siddhivinayak Construction",
                "Siddhi Construction (Nagar)",
                "Gold’s Gym",
                "Nitrro Gym",
                "Focus Fitness",
                "La-Fit Fitness",
                "Serenity Spa & Saloon",
                "O+ Spa",
                "Aesthetics Medi Spa",
                "Orra Spa",
              ].map((name, i) => (
                <span key={i}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
