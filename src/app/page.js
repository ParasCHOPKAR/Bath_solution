"use client"; // must always be the first line

import "./page.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Page() {
  // Fade-in / overlay scroll animation for product sections
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

  // Product data (zigzag + fade scroll)
  const products = [
    {
      id: 1,
      title: "Luxury Bath Tubs",
      desc: "Experience ultimate relaxation with our premium acrylic whirlpool and spa bathtubs.",
      img: "/images/hero_02.png",
    },
    {
      id: 2,
      title: "Steam & Sauna Systems",
      desc: "Transform your home into a rejuvenating wellness retreat with advanced steam technology.",
      img: "/images/hero_02.png",
    },
    {
      id: 3,
      title: "Rain Showers & Panels",
      desc: "Immerse yourself in a luxurious shower experience with our smart rain panels.",
      img: "/images/hero_02.png",
    },
    {
      id: 4,
      title: "Smart Toilets & Accessories",
      desc: "Upgrade your bathroom with our elegant, automated hygiene systems.",
      img: "/images/hero_02.png",
    },
  ];

  return (
    <>
      {/* ==========================
          HERO SECTION
      =========================== */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Redefine <span className="gold-text">Luxury</span> in Every Bath
          </h1>
          <p>
            Discover premium bathroom fittings, modern designs, and elegant finishes
            crafted for sophistication.
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
      </section>

      {/* ==========================
          ABOUT US SECTION
      =========================== */}
      <section className="about-section" id="about">
        <div className="about-wrapper">
          <div className="about-left">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              Galaxy Bath Solution was formed in 2012 with the brand Coral range of bathtubs,
              whirlpool massage jets, and steam sauna systems. Our expertise ensures every
              product transforms your bath into a luxury spa experience that enhances your
              mood and pleasure.
            </p>
            <p className="about-text">
              Galaxy Bath Solution is revolutionizing bathrooms and is all set to become
              a household name soon.
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

      {/* ==========================
          ABOUT VIDEO SECTION
      =========================== */}
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

      {/* ==========================
          HOVER IMAGE SECTION
      =========================== */}
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
              Aesthetically designed complete bathroom solutions to make your bath
              space more relaxing & refreshing.
            </p>
            <a href="#">Know More →</a>
          </div>
        </div>

        <div className="solution-card">
          <div className="image-container">
            <Image
              src="/images/hero_02.png"
              alt="Light Solutions"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="solution-image"
            />
          </div>

          <div className="solution-content">
            <h2>LIGHT SOLUTIONS</h2>
            <p>
              Elegant lighting concepts that bring brilliance, warmth, and modern
              aesthetics to your interiors.
            </p>
            <a href="#">Know More →</a>
          </div>
        </div>
      </section>

      {/* ==========================
          PRODUCT SHOWCASE SECTION
          (Stacked Scroll with Fade-in)
      =========================== */}
   {/* ==========================
    PRODUCT SHOWCASE SECTION (SIMPLE GRID)
=========================== */}
<section id="products" className="products-wrapper">
  <h2 className="products-title">Our Premium Products</h2>

  <div className="products-grid">
    {products.map((item) => (
      <div key={item.id} className="product-card">
        <Image
          src={item.img}
          alt={item.title}
          width={400}
          height={250}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="product-info">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <a href="#" className="learn-btn">Learn More →</a>
        </div>
      </div>
    ))}
  </div>

  {/* View All Products Section */}
  <div className="view-all">
    <a href="#all-products" className="view-all-btn">
      View All Products
    </a>
  </div>
</section>

      {/* ==========================
          CLIENTS SECTION
      =========================== */}
      <section className="clients-section" id="clients">
        <div className="clients-container">
          <h2 className="clients-title">Our Esteemed Clients</h2>
          <p className="clients-subtitle">
            Trusted by top builders, developers, fitness centers, and luxury spas across India.
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
