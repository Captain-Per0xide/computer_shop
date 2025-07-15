import AdProductGrid from "@/components/ad-product-grid";
import BestSellingCarousel from "@/components/best-selling-carousel";
import FirstPart from "@/components/first-part";
import Navbar from "@/components/navbar";
import SecondPart from "@/components/second-part";

// Example data for the AdProductGrid component
const exampleFeaturedPoster = {
  id: 1,
  image: "/Poster/msi-rtx-4060-gpu-deal-02.webp",
  ctaText: "SHOP NOW",
  backgroundColor: "bg-gradient-to-br from-purple-600 to-stone-600"
}

const exampleProducts = [
  {
    id: 1,
    name: "Zotac RTX 5050 Twin Edge 8GB GDDR6 Graphics Card",
    image: "/gpu.png",
    originalPrice: 32450,
    salePrice: 28450,
    discount: 31,
    soldOut: false
  },
  {
    id: 2,
    name: "INNO3D RTX 5060 Twin X2 SFF 8GB GDDR7 Graphics Card",
    image: "/gpu-3.png",
    originalPrice: 34880,
    salePrice: 30480,
    discount: 36,
    soldOut: false
  },
  {
    id: 3,
    name: "INNO3D RTX 5060 Twin X2 OC SFF 8GB GDDR7 Graphics Card",
    image: "/gpu-3.png",
    originalPrice: 33260,
    salePrice: 31260,
    discount: 37,
    soldOut: false
  },
  {
    id: 4,
    name: "ZOTAC RTX 5060 Solo 8GB GDDR7 Graphics Card",
    image: "/gpu-4.png",
    originalPrice: 33110,
    salePrice: 31600,
    discount: 35,
    soldOut: false
  },
  {
    id: 5,
    name: "Gigabyte RTX 5060 Windforce 8GB GDDR7 Graphics Card",
    image: "/gpu.png",
    originalPrice: 35500,
    salePrice: 32100,
    discount: 28,
    soldOut: false
  },
  {
    id: 6,
    name: "ZOTAC Gaming RTX 5060 Twin Edge 8GB GDDR7 Graphics Card",
    image: "/gpu-4.png",
    originalPrice: 34155,
    salePrice: 32500,
    discount: 35,
    soldOut: false
  },
  {
    id: 7,
    name: "MSI RTX 5060 Ventus 2X OC White 8GB GDDR7 Graphics Card",
    image: "/gpu-2.png",
    originalPrice: 36000,
    salePrice: 33200,
    discount: 40,
    soldOut: false
  },
  {
    id: 8,
    name: "ZOTAC Gaming RTX 5060 Twin Edge OC 8GB GDDR7 Graphics Card",
    image: "/gpu.png",
    originalPrice: 35650,
    salePrice: 33250,
    discount: 34,
    soldOut: false
  }
]
const bestSellingMotherboards = [
  {
    id: 1,
    image: "/motherboard-2.png",
    name: "ASRock A620M-HDV/M.2 Plus DDR5 Motherboard",
    oldPrice: "₹13999",
    newPrice: "₹6,900",
    discount: "51%",
    soldOut: false,
    buttonLabel: "Buy Now",
  },
  {
    id: 2,
    image: "/motherboard-3.png",
    name: "Asrock B550 Phantom Gaming 4/ac (Wi-Fi) Motherboard",
    oldPrice: "₹14,000",
    newPrice: "₹10,800",
    discount: "23%",
    soldOut: false,
    buttonLabel: "Buy Now",
  },
  {
    id: 3,
    image: "/motherboard-4.png",
    name: "Asrock B550 Pro4 Motherboard",
    oldPrice: "₹22,000",
    newPrice: "₹10,450",
    discount: "53%",
    soldOut: false,
  },
  {
    id: 4,
    image: "/motherboard-5.png",
    name: "ASUS Prime B860-Plus WIFI-CSM ATX Motherboard",
    oldPrice: "₹24,000",
    newPrice: "₹18,998",
    discount: "21%",
    soldOut: false,
    buttonLabel: "Buy Now",
  },
];
export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <FirstPart />
      <SecondPart />
      <AdProductGrid
        featuredPoster={exampleFeaturedPoster}
        categoryTitle="New Gen Graphics Cards"
        products={exampleProducts}
        maxProducts={8}
      />
      <BestSellingCarousel title="Best Selling Motherboards" products={bestSellingMotherboards} />
    </div>
  );
}
