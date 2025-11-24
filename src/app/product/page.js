"use client";
import { useState } from "react";
import "./page.css";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(null);

/* ================= PRODUCT CATEGORIES (FINAL & CLEAN) ================= */
/* This file is split into 5 readable parts with full structured + raw details (Option C). */
/* PART 1 of 5: Bath Tubs — Galaxy Series (first half) */
const productCategories = [
  {
    category: "Bath Tubs",
    subProducts: [
      {
        name: "Galaxy Regular",
        sizes: [
          "1215 x 1830 x 700 mm",
          "980 x 1820 x 540 mm",
          "910 x 1680 x 540 mm",
          "1680 x 760 x 540 mm",
          "1520 x 760 x 500 mm",
        ],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 01 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: [
          "Bubble Bath System",
          "Air Blower 400w",
          "12 Bubble Jets"
        ],
        faucetSets: [
          "Hot & Cold mixer",
          "Multiflow Hand Shower",
          "Waterfall Spout",
          "Online Heaters (3kw)"
        ],
        fullDetails: `Galaxy Regular
Size(s): 1215 x 1830 x 700 mm; 980 x 1820 x 540 mm; 910 x 1680 x 540 mm; 1680 x 760 x 540 mm; 1520 x 760 x 500 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 01 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw)
`,
        img: "/all_products/Galaxy_Regular.jpg",
      },

      {
        name: "Galaxy Standard",
        sizes: ["1675 x 760 x 500 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 01 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: [
          "Bubble Bath System",
          "Air Blower 400w",
          "12 Bubble Jets"
        ],
        faucetSets: [
          "Hot & Cold mixer",
          "Multiflow Hand Shower",
          "Waterfall Spout",
          "Online Heaters (3kw)"
        ],
        fullDetails: `Galaxy Standard
Size: 1675 x 760 x 500 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 01 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw)
`,
        img: "/all_products/Galaxy_Standard.jpg",
      },

      {
        name: "Galaxy Valio",
        sizes: ["1680 x 760 x 540 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 01 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: [
          "Bubble Bath System",
          "Air Blower 400w",
          "12 Bubble Jets"
        ],
        faucetSets: ["Hot & Cold mixer","Multiflow Hand Shower","Waterfall Spout","Online Heaters (3kw)"],
        fullDetails: `Galaxy Valio
Size: 1680 x 760 x 540 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 01 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw)
`,
        img: "/all_products/Galaxy_Valio.jpg",
      },

      {
        name: "Galaxy Elanza",
        sizes: [
          "900 x 1810 x 540 mm",
          "1500 x 1820 x 900 x 550 mm",
          "1350 x 750 x 550 mm",
        ],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 01 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: [
          "Bubble Bath System",
          "Air Blower 400w",
          "12 Bubble Jets"
        ],
        faucetSets: [
          "Hot & Cold mixer",
          "Multiflow Hand Shower",
          "Waterfall Spout",
          "Online Heaters (3kw)"
        ],
        fullDetails: `Galaxy Elanza
Sizes: 900 x 1810 x 540 mm; 1500 x 1820 x 900 x 550 mm; 1350 x 750 x 550 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 01 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw)
`,
        img: "/all_products/Galaxy_Elanza.jpg",
      },
    ],
  },

/* PART 2 of 5: Bath Tubs — Galaxy Series (second half) + start Spa Bathtubs */
  {
    category: "Bath Tubs (continued)",
    subProducts: [
      {
        name: "Galaxy Utiliti",
        sizes: ["910 x 1815 x 540 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 02 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        faucetSets: ["Hot & Cold mixer","Multiflow Hand Shower","Waterfall Spout","Online Heaters (3kw)"],
        fullDetails: `Galaxy Utiliti
Size: 910 x 1815 x 540 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 02 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw)
`,
        img: "/all_products/spa/Galaxy_Utiliti.jpg",
      },

      {
        name: "Galaxy Caesar",
        sizes: ["980 x 1820 x 540 mm", "910 x 1680 x 540 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 01 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        faucetSets: ["Hot & Cold mixer","Multiflow Hand Shower","Waterfall Spout","Online Heaters (3kw)"],
        fullDetails: `Galaxy Caesar
Sizes: 980 x 1820 x 540 mm; 910 x 1680 x 540 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 01 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw)
`,
        img: "/all_products/spa/Galaxy_Caesar.jpg",
      },

      /* ===========================================
         SPA BATHTUBS — Galaxy Hot Spa Series
      ============================================ */
      {
        name: "Galaxy Hot Spa",
        desc: "Premium hot spa system",
        material: "Acrylic (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 04 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: [
          "Bubble Bath System",
          "Air Blower 400w",
          "12 Bubble Jets",
          "LED TV",
          "Online Heaters (3kw)"
        ],
        faucetSets: ["Hot & Cold mixer","Multiflow Hand Shower","Waterfall Spout"],
        fullDetails: `Galaxy Hot Spa
Material: Acrylic (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 04 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw), LED TV
`,
        img: "/all_products/spa/Galaxy_Hot_Spa.jpg",
      },

      {
        name: "Galaxy Round Spa",
        sizes: ["1800 x 1050 mm"],
        material: "Acrylic (PMMA)",
        color: "White",
        features: ["Standard Massage, 6 Jets", "Underwater Light"],
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 04 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        faucetSets: ["Hot & Cold mixer","Multiflow Hand Shower","Waterfall Spout","Online Heaters (3kw)"],
        fullDetails: `Galaxy Round Spa
Size: 1800 x 1050 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 04 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw), LED TV
`,
        img: "/all_products/spa/Galaxy_Round_Spa.jpg",
      },
    ],
  },

/* PART 3 of 5: Spa Bathtubs continued + Massage Bathtubs */
  {
    category: "Spa Bathtubs (continued)",
    subProducts: [
      {
        name: "Galaxy Turbo XL Deluxe",
        sizes: ["1525 x 1525 x 570 mm"],
        material: "Acrylic (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 04 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Turbo XL Deluxe
Size: 1525 x 1525 x 570 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 04 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
`,
        img: "/all_products/Spa_Bathtubs/Galaxy_Turbo_XL_Deluxe.jpg",
      },

      {
        name: "Galaxy Turbo Classic",
        sizes: ["1525 x 1525 x 640 mm"],
        material: "Acrylic (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 04 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Turbo Classic
Size: 1525 x 1525 x 640 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 04 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
`,
        img: "/all_products/Spa_Bathtubs/Galaxy_Turbo_Classic.jpg",
      },

      {
        name: "Galaxy Turbo",
        sizes: ["1350 x 1350 x 560 mm"],
        material: "Acrylic (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 02 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Turbo
Size: 1350 x 1350 x 560 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 02 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
`,
        img: "/all_products/Spa_Bathtubs/Galaxy_Turbo.jpg",
      },

      {
        name: "Galaxy Rossette",
        sizes: ["1210 x 1210 x 560 mm"],
        material: "Acrylic (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 02 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Rossette
Size: 1210 x 1210 x 560 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 02 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
`,
        img: "/all_products/Spa_Bathtubs/Galaxy_Rossette.jpg",
      },

      {
        name: "Galaxy Spacio",
        sizes: ["1365 x 1365 x 560 mm"],
        material: "Acrylic (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 02 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Spacio
Size: 1365 x 1365 x 560 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 02 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
`,
        img: "/all_products/Spa_Bathtubs/Galaxy_Spacio.jpg",
      },
    ],
  },

/* PART 4 of 5: Massage Bathtubs (detailed) + Steam & Sauna lists + Pumps */
  {
    category: "Massage Bathtubs",
    subProducts: [
      {
        name: "Galaxy Seagull W",
        sizes: ["1615 x 975 x 610 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 02 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Seagull W
Size: 1615 x 975 x 610 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 02 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
`,
        img: "/all_products/Massage_Bathtubs/Galaxy-Seagull-W.jpg",
      },

      {
        name: "Galaxy Oscar",
        sizes: ["1210 x 1815 x 540 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 04 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        faucetSets: ["Hot & Cold mixer","Multiflow Hand Shower","Waterfall Spout","Online Heaters (3kw)"],
        fullDetails: `Galaxy Oscar
Size: 1210 x 1815 x 540 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 04 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
FAUCET SETS: Hot & Cold mixer, Multiflow Hand Shower, Waterfall Spout, Online Heaters (3kw)
`,
        img: "/all_products/Massage_Bathtubs/Galaxy-Oscar.jpg",
      },

      {
        name: "Galaxy Oscar Deluxe",
        sizes: ["965 x 1830 x 635 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 04 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Oscar Deluxe
Size: 965 x 1830 x 635 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 04 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
`,
        img: "/all_products/Massage_Bathtubs/Galaxy-Oscar-Deluxe.jpg",
      },

      {
        name: "Galaxy Lancer",
        sizes: ["1215 x 1830 x 700 mm", "1310 x 1830 x 700 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        variants: ["Lancer (L)", "Lancer (R)"],
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 04 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Lancer
Sizes: 1215 x 1830 x 700 mm; 1310 x 1830 x 700 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
Variants: Lancer (L) and Lancer (R)
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 04 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
OPTIONAL FEATURES: Bubble Bath System | Air Blower 400w | 12 Bubble Jets
`,
        img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg",
      },

      {
        name: "Galaxy Smart Round",
        sizes: ["1500 x 650 mm"],
        material: "Acrylic Bath Tub Heavy Duty (PMMA)",
        color: "White",
        basicCombo: [
          "Front Panel",
          "Standard Massage system with 6 jets",
          "Spinal 02 Jet",
          "1.5HP imported motor with PN on/off",
          "Pop-up Coupling",
          "Pressure Control Switch",
          "Multi Chromatic under Water Light",
          "Dream Pillow"
        ],
        optionalFeatures: ["Bubble Bath System","Air Blower 400w","12 Bubble Jets"],
        fullDetails: `Galaxy Smart Round
Size: 1500 x 650 mm
Material: Acrylic Bath Tub Heavy Duty (PMMA)
Color: White
BASIC COMBO: Front Panel | Standard Massage system with 6 jets | Spinal 02 Jet | 1.5HP imported motor with PN on/off | Pop-up Coupling | Pressure Control Switch | Multi Chromatic under Water Light | Dream Pillow
`,
        img: "/all_products/Massage_Bathtubs/Galaxy_Smart_Round.jpg",
      },
    ],
  },

  /* Steam Bathtubs (models considered steam-compatible) */
  {
    category: "Steam Bathtubs",
    subProducts: [
      {
        name: "Galaxy Round Spa",
        note: "Heater / Steam compatible",
        img: "/images/product_im.jpg",
        fullDetails: `Galaxy Round Spa — Steam / Heater compatible (see Spa Bathtubs for full specs)`
      },
      { name: "Galaxy Spa Range (All Models)", img: "/images/product_im.jpg", fullDetails: "Steam-capable spa models" },
      { name: "Galaxy Lancer Series", img: "/images/product_im.jpg", fullDetails: "Steam-capable variants" },
      { name: "Galaxy Oscar Series", img: "/images/product_im.jpg", fullDetails: "Steam-capable variants" },
      { name: "Galaxy Seagull W", img: "/images/product_im.jpg", fullDetails: "Steam-capable model" },
      { name: "Galaxy Smart Round", img: "/images/product_im.jpg", fullDetails: "Steam-capable model" },
      { name: "Galaxy Turbo Series", img: "/images/product_im.jpg", fullDetails: "Steam-capable series" },
      { name: "Galaxy Ocean Round", img: "/images/product_im.jpg", fullDetails: "Steam-capable model" },
      { name: "Galaxy Verona Round", img: "/images/product_im.jpg", fullDetails: "Steam-capable model" },
      { name: "Galaxy Classic", img: "/images/product_im.jpg", fullDetails: "Steam-capable model" },
    ],
  },

/* PART 5 of 5: Sauna, Pressure Pumps, Glass Partition Cubicle and closing */
  {
    category: "Sauna Bathtubs",
    subProducts: [
      { name: "Galaxy Hot Spa", img: "/images/product_im.jpg", fullDetails: "Sauna-capable model (heater + jets + spa combination)" },
      { name: "Galaxy Round Spa", img: "/images/product_im.jpg", fullDetails: "Sauna-capable model" },
      { name: "Galaxy Turbo XL Deluxe", img: "/images/product_im.jpg", fullDetails: "Sauna-capable model" },
      { name: "Galaxy Turbo Classic", img: "/images/product_im.jpg", fullDetails: "Sauna-capable model" },
      { name: "Galaxy Lancer Series", img: "/images/product_im.jpg", fullDetails: "Sauna-capable variants" },
      { name: "Galaxy Maderia", img: "/images/product_im.jpg", fullDetails: "Sauna-capable model" },
      { name: "Galaxy Verona Round", img: "/images/product_im.jpg", fullDetails: "Sauna-capable model" },
      { name: "Galaxy Classic", img: "/images/product_im.jpg", fullDetails: "Sauna-capable model" },
    ],
  },

  {
    category: "Pressure Pump",
    subProducts: [
      // GX Series
      { name: "GXM001", img: "/images/product_im.jpg", fullDetails: "GXM001 model — pressure jet & pump" },
      { name: "GXM001S", img: "/images/product_im.jpg", fullDetails: "GXM001S model — pressure jet & pump" },
      { name: "GXM002", img: "/images/product_im.jpg" },
      { name: "GXM003", img: "/images/product_im.jpg" },
      { name: "GXM004", img: "/images/product_im.jpg" },
      { name: "GXM006", img: "/images/product_im.jpg" },
      { name: "GXM006S", img: "/images/product_im.jpg" },
      { name: "GXM008", img: "/images/product_im.jpg" },
      { name: "GXM009", img: "/images/product_im.jpg" },
      { name: "GXM010", img: "/images/product_im.jpg" },
      { name: "GXM011", img: "/images/product_im.jpg" },

      // Heavy Duty GX
      { name: "GX 002", img: "/images/product_im.jpg" },
      { name: "GX 004", img: "/images/product_im.jpg" },
      { name: "GX 005", img: "/images/product_im.jpg" },
      { name: "GX 006", img: "/images/product_im.jpg" },
      { name: "GX 007", img: "/images/product_im.jpg" },
      { name: "GX 5503", img: "/images/product_im.jpg" },
      { name: "GX 5539", img: "/images/product_im.jpg" },
      { name: "GX 5533", img: "/images/product_im.jpg" },
      { name: "GX 5501 (variant 1)", img: "/images/product_im.jpg" },
      { name: "GX 5501 (variant 2)", img: "/images/product_im.jpg" },
    ],
  },

  {
    category: "Glass Partition Cubicle",
    subProducts: [
      { name: "Standard Shower Panels", img: "/images/product_im.jpg", fullDetails: "Shower partition panels compatible with spa & bath spaces" },
      { name: "Tempered Glass Cubicles", img: "/images/product_im.jpg", fullDetails: "Tempered glass shower cubicles with stainless fittings" },
      { name: "Spa & Bath Compatible Glass Units", img: "/images/product_im.jpg", fullDetails: "Glass units designed to integrate with spa and bath installations" },
    ],
  },

  /* small metadata entry for company / header text you provided */
  {
    category: "Catalog Metadata",
    subProducts: [
      {
        name: "Catalog Year / Header",
        fullDetails: `2023
Bath Tubs | Massage Tub | Steam Bath | Shower Partition | Pressure Pump | Sona Bath | Fountains
Swimming Pool & Accessories | Shower Panel
B a t h  S o l u t i o n — GALAXY — GALAXY SANITATIONS PVT.LTD.`
      }
    ]
  }
]; // end productCategories

/* ================= END OF FILE (PART 1–5 combined) ================= */

  return (
    <>
      {/* ================= HERO SECTION (Left text + Right image) ================= */}
      <section className="product-hero">
        <div className="hero-left">
          <h1>Premium Products</h1>
          <p>
            Explore our luxury range of bathtubs, spa systems, steam units, pumps, and glass cubicles.
          </p>
          <div className="hero-btns">
            <a href="#products" className="hero-btn gold">Explore Now</a>
            <a href="/contact" className="hero-btn outline">Get Quote</a>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          {/* Using the uploaded image file path as the hero image URL */}
          <div className="hero-glass">
            <img src="/images/hero/pro_bath.jpg" alt="Products hero" />
          </div>
        </div>
      </section>

      {/* ================= PRODUCT PAGE ================= */}
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

  <div className="down-arrow"></div>
</div>

          ) : (
            <>
              <h2 className="category-title">
                {productCategories[activeCategory].category}
              </h2>

              <div className="subproduct-grid">
                {productCategories[activeCategory].subProducts.map((sub, i) => (
                  <div key={i} className="subproduct-card">
                    <img src={sub.img} alt={sub.name} className="sub-img" />
                    <h3>{sub.name}</h3>
                    <p>{sub.desc}</p>
                    <a className="detail-btn" href="#">View Details →</a>
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
