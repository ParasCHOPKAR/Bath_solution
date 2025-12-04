"use client";
import { useState } from "react";
import "./page.css";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(null);

  /* ================= PRODUCT CATEGORIES (ALL PARTS) ================= */
  const productCategories = [
    /* PART 1 */
    {
      category: "Bath Tubs",
      subProducts: [
        {
          name: "Galaxy Regular",
          img: "/all_products/Galaxy_Regular.jpg",
          link: "/products/galaxy-regular",
        },
        {
          name: "Galaxy Standard",
          img: "/all_products/Galaxy_Standard.jpg",
          link: "/products/galaxy-standard",
        },
        {
          name: "Galaxy Valio",
          img: "/all_products/Galaxy_Valio.jpg",
          link: "/products/galaxy-valio",
        },
        {
          name: "Galaxy Elanza",
          img: "/all_products/Galaxy_Elanza.jpg",
          link: "/products/galaxy-elanza",
        },
      ],
    },

    /* PART 2 */
    {
      category: "Bath Tubs (continued)",
      subProducts: [
        {
          name: "Galaxy Utiliti",
          img: "/all_products/spa/Galaxy_Utiliti.jpg",
          link: "/products/galaxy-utiliti",
        },
        {
          name: "Galaxy Caesar",
          img: "/all_products/spa/Galaxy_Caesar.jpg",
          link: "/products/galaxy-caesar",
        },

        /* SPA BATHTUBS — Galaxy Hot Spa Series */
        {
          name: "Galaxy Hot Spa",
          img: "/all_products/spa/Galaxy_Hot_Spa.jpg",
          link: "/products/galaxy-hot-spa",
     
        },
        {
          name: "Galaxy Round Spa",
          img: "/all_products/spa/Galaxy_Round_Spa.jpg",
          link: "/products/galaxy-round-spa",
        },
      ],
    },

    /* PART 3 */
    {
      category: "Spa Bathtubs (continued)",
      subProducts: [
        {
          name: "Galaxy Turbo XL Deluxe",
          img: "/all_products/Spa_Bathtubs/Galaxy_Turbo_XL_Deluxe.jpg",
          link: "/products/galaxy-turbo-xl-deluxe",
        },
        {
          name: "Galaxy Turbo Classic",
          img: "/all_products/Spa_Bathtubs/Galaxy_Turbo_Classic.jpg",
          link: "/products/galaxy-turbo-classic",
        },
        {
          name: "Galaxy Turbo",
          img: "/all_products/Spa_Bathtubs/Galaxy_Turbo.jpg",
          link: "/products/galaxy-turbo",
        },
        {
          name: "Galaxy Rossette",
          img: "/all_products/Spa_Bathtubs/Galaxy_Rossette.jpg",
          link: "/products/galaxy-rossette",
        },
        {
          name: "Galaxy Spacio",
          img: "/all_products/Spa_Bathtubs/Galaxy_Spacio.jpg",
          link: "/products/galaxy-spacio",
        },
      ],
    },

    /* PART 4 */
    {
      category: "Massage Bathtubs",
      subProducts: [
        {
          name: "Galaxy Seagull W",
          img: "/all_products/Massage_Bathtubs/Galaxy-Seagull-W.jpg",
          link: "/products/galaxy-seagull-w",
        },
        {
          name: "Galaxy Oscar",
          img: "/all_products/Massage_Bathtubs/Galaxy-Oscar.jpg",
          link: "/products/galaxy-oscar",
        },
        {
          name: "Galaxy Oscar Deluxe",
          img: "/all_products/Massage_Bathtubs/Galaxy-Oscar-Deluxe.jpg",
          link: "/products/galaxy-oscar-deluxe",
        },
        {
          name: "Galaxy Lancer",
          img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg",
          link: "/products/galaxy-lancer",
        },
        {
          name: "Galaxy Smart Round",
          img: "/all_products/Massage_Bathtubs/Galaxy_Smart_Round.jpg",
          link: "/products/galaxy-smart-round",
        },
      ],
    },

    /* Steam Bathtubs */
    {
      category: "Steam Bathtubs",
      subProducts: [
        {
          name: "Galaxy Round Spa (Steam-capable)",
          img: "/all_products/Spa_Bathtubs.jpg",
          link: "/products/galaxy-round-spa",
        },
        {
          name: "Galaxy Spa Range (All Models)",
          img: "/all_products/Massage_Bathtubs/Galaxy_Smart_Round.jpg",
          link: "/products/galaxy-spa-range",
        },
        {
          name: "Galaxy Lancer Series",
          img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg",
          link: "/products/galaxy-lancer-series",
        },
        {
          name: "Galaxy Oscar Series",
          img: "/all_products/Massage_Bathtubs/Galaxy-Oscar-Deluxe.jpg",
          link: "/products/galaxy-oscar-series",
        },
        {
          name: "Galaxy Seagull W (Steam-capable)",
          img: "/all_products/Massage_Bathtubs/Galaxy-Seagull-W.jpg",
          link: "/products/galaxy-seagull-w-steam",
        },
        {
          name: "Galaxy Smart Round (Steam-capable)",
          img: "/all_products/spa/Galaxy_Round_Spa.jpg",
          link: "/products/galaxy-smart-round-steam",
        },
        {
          name: "Galaxy Turbo Series (Steam-capable)",
          img: "/all_products/spa/Galaxy_Utiliti.jpg",
          link: "/products/galaxy-turbo-series-steam",
        },
        {
          name: "Galaxy Ocean Round",
          img: "/all_products/Galaxy_Standard.jpg",
          link: "/products/galaxy-ocean-round",
        },
        {
          name: "Galaxy Verona Round",
          img: "/all_products/Spa_Bathtubs.jpg",
          link: "/products/galaxy-verona-round",
        },
        {
          name: "Galaxy Classic",
          img: "/all_products/Galaxy_Regular.jpg",
          link: "/products/galaxy-classic",
        },
      ],
    },

    /* PART 5: Sauna, Pumps, Glass Partitions */
    {
      category: "Sauna Bathtubs",
      subProducts: [
     
        {
          name: "Galaxy Round Spa (Sauna-capable)",
          img: "/all_products/spa/Galaxy_Round_Spa.jpg",
          link: "/products/galaxy-round-spa-sauna",
        },
        {
          name: "Galaxy Turbo XL Deluxe (Sauna-capable)",
          img: "/all_products/Galaxy_Standard.jpg",
          link: "/products/galaxy-turbo-xl-deluxe-sauna",
        },
        {
          name: "Galaxy Turbo Classic (Sauna-capable)",
          img: "/all_products/Massage_Bathtubs/Galaxy-Oscar-Deluxe.jpg",
          link: "/products/galaxy-turbo-classic-sauna",
        },
        {
          name: "Galaxy Lancer Series (Sauna-capable)",
          img: "/all_products/Galaxy_Standard.jpg",
          link: "/products/galaxy-lancer-series-sauna",
        },
        {
          name: "Galaxy Maderia",
          img: "/all_products/Massage_Bathtubs/Galaxy_Smart_Round.jpg",
          link: "/products/galaxy-maderia-sauna",
        },

        {
          name: "Galaxy Classic (Sauna-capable)",
          img: "/all_products/spa/Galaxy_Hot_Spa.jpg",
          link: "/products/galaxy-classic-sauna",
        },
      ],
    },

    {
      category: "Pressure Pump",
      subProducts: [
       /* GX SERIES - Correct Paths */
    { name: "GXM001", img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg", link: "/products/gx-series/gxm001" },
    { name: "GXM001S", img: "/all_products/Spa_Bathtubs.jpg", link: "/products/gx-series/gxm001s" },
    { name: "GXM002", img: "/all_products/spa/Galaxy_Hot_Spa.jpg", link: "/products/gx-series/gxm002" },
    { name: "GXM003", img: "/all_products/Spa_Bathtubs.jpg", link: "/products/gx-series/gxm003" },
    { name: "GXM004", img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg", link: "/products/gx-series/gxm004" },
    { name: "GXM006", img: "/all_products/Massage_Bathtubs/Galaxy_Smart_Round.jpg", link: "/products/gx-series/gxm006" },
    { name: "GXM006S", img: "/all_products/Galaxy_Elanza.jpg", link: "/products/gx-series/gxm006s" },
    { name: "GXM008", img: "/all_products/Massage_Bathtubs/Galaxy-Oscar.jpg", link: "/products/gx-series/gxm008" },
    { name: "GXM009", img: "/all_products/Galaxy_Standard.jpg", link: "/products/gx-series/gxm009" },
    { name: "GXM010", img: "/all_products/Massage_Bathtubs/Galaxy_Smart_Round.jpg", link: "/products/gx-series/gxm010" },
    { name: "GXM011", img: "/all_products/spa/Galaxy_Hot_Spa.jpg", link: "/products/gx-series/gxm011" },

    /* HEAVY DUTY GX SERIES */
    { name: "GX 002", img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg", link: "/products/gx-series/gx-002" },
    { name: "GX 004", img: "/all_products/Massage_Bathtubs/Galaxy-Oscar.jpg", link: "/products/gx-series/gx-004" },
    { name: "GX 005", img: "/all_products/spa/Galaxy_Hot_Spa.jpg", link: "/products/gx-series/gx-005" },
    { name: "GX 006", img: "/all_products/Galaxy_Standard.jpg", link: "/products/gx-series/gx-006" },
    { name: "GX 007", img: "/all_products/Galaxy_Standard.jpg", link: "/products/gx-series/gx-007" },
    { name: "GX 5503", img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg", link: "/products/gx-series/gx-5503" },
    { name: "GX 5539", img: "/all_products/spa/Galaxy_Hot_Spa.jpg", link: "/products/gx-series/gx-5539" },
    { name: "GX 5533", img: "/all_products/Galaxy_Standard.jpg", link: "/products/gx-series/gx-5533" },

    /* Variants – based on your folder names */
    { name: "GX 5501 (variant 1)", img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg", link: "/products/gx-series/gx-5501_v1" },
    { name: "GX 5501 (variant 2)", img: "/all_products/spa/Galaxy_Hot_Spa.jpg", link: "/products/gx-series/gx-5501-v2" },
      ],
    },

    {
      category: "Glass Partition Cubicle",
      subProducts: [
        { name: "Standard Shower Panels", img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg", link: "/products/standard-shower-panels" },
        { name: "Tempered Glass Cubicles", img: "/all_products/spa/Galaxy_Hot_Spa.jpg", link: "/products/tempered-glass-cubicles" },
        { name: "Spa & Bath Compatible Glass Units", img: "/all_products/spa/Galaxy_Utiliti.jpg", link: "/products/spa-bath-glass-units" },
      ],
    },


  ]; // end productCategories

  /* ================= PAGE UI ================= */
  return (
    <>
      {/* HERO */}
      <section className="product-hero">
        <div className="hero-left">
          <h1>Premium Products</h1>
          <p>Explore our luxury range of bathtubs, spa systems, steam units, pumps, and glass cubicles.</p>
          <div className="hero-btns">
            <a href="#products" className="hero-btn gold">Explore Now</a>
            <a href="/contact" className="hero-btn outline">Get Quote</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-glass"><img src="/images/hero/pro_bath.jpg" alt="Products hero" /></div>
        </div>
      </section>

      {/* PRODUCT PAGE */}
      <section className="product-page" id="products">
        {/* LEFT SIDEBAR */}
        <aside className="product-sidebar">
          <h3>Product Category</h3>
          {productCategories.map((cat, index) => (
            <button
              key={index}
              className={`sidebar-item ${activeCategory === index ? "active" : ""}`}
              onClick={() => setActiveCategory(index)}
            >
              {cat.category}
            </button>
          ))}
        </aside>

        {/* RIGHT CONTENT */}
        <div className="product-content">
          {activeCategory === null ? (
            <div className="empty-state">
              <img src="/images/hero_02.png" alt="Preview" className="empty-img" />
              <h2>Select a Category</h2>
              <p>Browse premium bathtubs, spa systems, steam units, pumps, and more.</p>
              <div className="down-arrow" />
            </div>
          ) : (
            <>
              <h2 className="category-title">{productCategories[activeCategory].category}</h2>

              <div className="subproduct-grid">
                {productCategories[activeCategory].subProducts.map((sub, i) => (
                  <div key={i} className="subproduct-card">
                    <img src={sub.img} alt={sub.name} className="sub-img" />
                    <h3>{sub.name}</h3>
                    {sub.desc && <p className="sub-desc">{sub.desc}</p>}

                    {/* VIEW DETAILS — uses manual link */}
                    <a className="detail-btn" href={sub.link || "#"}>
                      View Details →
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
