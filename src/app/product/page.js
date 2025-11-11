"use client";
import "./products.css";

export default function Products() {
  const products = [
    {
      title: "Luxury Shower Systems",
      desc: "Experience comfort and style with precision water control and premium finishes that redefine modern bathrooms.",
    },
    {
      title: "Elegant Faucets",
      desc: "Crafted with finesse to enhance your bathroom aesthetics while offering durability and smooth water flow.",
    },
    {
      title: "Designer Basins",
      desc: "Modern designs made with high-quality materials to match every bathroom style and space.",
    },
    {
      title: "Bath Accessories",
      desc: "Functional yet elegant add-ons designed to elevate your daily bathing experience.",
    },
  ];

  return (
    <main className="products-page">
      {/* === HERO SECTION === */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Premium Bath Solutions</h1>
          <p>
            Discover our collection of high-quality bath fittings, accessories,
            and innovative solutions designed for modern spaces.
          </p>
        </div>
      </section>

      {/* === PRODUCT SHOWCASE === */}
      <section className="product-showcase">
        <h2>Explore Our Range</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="product-cta">
        <h2>Interested in Our Products?</h2>
        <p>
          Get in touch with our team for personalized recommendations and
          quotations for your next project.
        </p>
        <a href="/contact" className="cta-btn">
          Contact Us
        </a>
      </section>
    </main>
  );
}
