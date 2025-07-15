import React from "react";
import InfiniteProductCarousel from "./infinite-product-carousel";
import BestSellingCarousel from "./best-selling-carousel";
const products = [
  {
    id: 1,
    image: "/ram.png",
    name: "RAM",
  },
  {
    id: 2,
    image: "/monitor.png",
    category: "Moniters",
  },
  {
    id: 3,
    image: "/cooler.png",
    name: "CPU Cooler",
  },
  {
    id: 4,
    image: "/ssd.png",
    name: "SSD",
  },
  {
    id: 5,
    image: "/power-supply.png",
    name: "Power Supply",
  },
  {
    id: 6,
    image: "/motherboard.png",
    name: "Motherboard",
  },
  {
    id: 7,
    image: "/gpu.png",
    name: "GPU",
  },
  {
    id: 8,
    image: "/cabinet.png",
    name: "Cabinet",
  },
  {
    id: 9,
    image: "/keyboard.png",
    name: "Keyboard",
  },
  {
    id: 10,
    image: "/mouse.png",
    name: "Mouse",
  },
];
const bestSellingProducts = [
  {
    id: 1,
    image: "/ram.png",
    name: "Adata XPG Spectrix D35G RGB 32GB 3200MHz CL16 DDR4 RAM",
    oldPrice: "₹13,199",
    newPrice: "₹6,499",
    discount: "51%",
    soldOut: false,
    buttonLabel: "Buy Now",
  },
  {
    id: 2,
    image: "/monitor.png",
    name: "Asus ProArt Display PA247CV Professional Monitor",
    oldPrice: "₹30,000",
    newPrice: "₹21,900",
    discount: "27%",
    soldOut: false,
    buttonLabel: "Buy Now",
  },
  {
    id: 3,
    image: "/cooler.png",
    name: "Ant Esports Sciflow ARGB White Cabinet Fan (Single Pack)",
    oldPrice: "₹1399",
    newPrice: "₹570",
    discount: "59%",
    soldOut: true,
  },
    {
        id: 4,
        image: "/ssd.png",
        name: "Samsung 970 EVO Plus NVMe M.2 SSD 1TB",
        oldPrice: "₹12,999",
        newPrice: "₹8,499",
        discount: "35%",
        soldOut: false,
        buttonLabel: "Buy Now",
    },
    {
        id: 5,
        image: "/power-supply.png",
        name: "Corsair CV550 550W 80 Plus Bronze Certified PSU",
        oldPrice: "₹4,999",
        newPrice: "₹3,499",
        discount: "30%",
        soldOut: false,
        buttonLabel: "Buy Now",
    },
];
const SecondPart = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
      <InfiniteProductCarousel products={products} />
      <BestSellingCarousel title="Best Selling Products" products={bestSellingProducts} />
    </div>
  );
};

export default SecondPart;
