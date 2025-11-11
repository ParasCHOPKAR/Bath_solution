"use client";

import "./about.css";
import Image from "next/image";

export default function About() {
  return (
    <main className="about-page">
      {/* === HERO SECTION === */}
      <section className="about-hero">
        <div className="hero-overlay" />
        <Image
          src="/images/about_01.jpg"
          alt="About Galaxy Bath Solutions"
          fill
          className="hero-image"
        />
        <div className="hero-content">
          <h1>About Galaxy Bath Solutions</h1>
          <p>
            Redefining luxury and comfort through elegant design and exceptional craftsmanship.
          </p>
        </div>
      </section>

      {/* === COMPANY STORY === */}
      <section className="about-story">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Galaxy Bath Solution was formed in the year 2012 with the brand Coral range of bathtubs and
            whirlpool massage jets, rub and steam sauna rooms. Our vast experience and expertise in making
            such products has encouraged us to introduce brand Galaxy’s range comprising acrylic bathtubs,
            whirlpool (massage jets) bath tubs, steam and sauna bath systems.
          </p>
          <p>
            Choose your own bath from a stunning and wide range. Transform your bathroom into giving you a
            luxury spa experience that enhances your mood and pleasure. The minimalist design originates
            from, and is inspired by, a highly evolved lifestyle and a rich cultural heritage.
          </p>
          <p>
            Galaxy Bath Solution is customer-centric and always strives to stay in touch with our valued
            customers. In addition, we welcome feedback from consultants, builders, architects, interior
            designers as well as our dealers. This helps us develop more luxurious, ergonomic and superior
            products within a minimum price range.
          </p>
          <p>
            Flawless quality, distinct functionality, and state-of-the-art manufacturing backed by excellent
            service have brought us not only clients but also reputation, trust, and stability. Moreover,
            Galaxy Bath Solution is widely known for elevating bathrooms to luxury rooms.
          </p>
          <p>
            Our outstanding product quality, efficient service backup, and consistent growth have enabled us
            to make our presence felt across the country. That’s why we are considered number one by industry
            leaders in this segment.
          </p>
          <p>
            No wonder, Galaxy Bath Solution is revolutionising bathrooms and is all set to become a
            household name soon.
          </p>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="mission-vision">
        <div className="mv-container">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To create innovative and elegant bath solutions that combine luxury, functionality, and
              sustainability — bringing wellness and comfort into every home.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be the most trusted and admired brand in luxury bath systems globally, setting benchmarks
              in design excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="why-choose">
        <h2>Why Choose Galaxy Bath Solutions?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>💎 Premium Quality</h3>
            <p>We use only the finest materials and advanced manufacturing processes to ensure long-lasting luxury.</p>
          </div>
          <div className="why-card">
            <h3>🛁 Modern Design</h3>
            <p>Our designs blend innovation and elegance, transforming ordinary bathrooms into spa-like retreats.</p>
          </div>
          <div className="why-card">
            <h3>⚙️ Advanced Technology</h3>
            <p>From hydrotherapy jets to digital control systems, our products integrate cutting-edge technology.</p>
          </div>
          <div className="why-card">
            <h3>🤝 Trusted Service</h3>
            <p>We ensure full support from consultation to installation, earning the trust of thousands nationwide.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
