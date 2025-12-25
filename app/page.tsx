import AdProductGrid from "@/components/ad-product-grid";
import BestSellingCarousel from "@/components/best-selling-carousel";
import FirstPart from "@/components/first-part";
import Navbar from "@/components/navbar";
import SecondPart from "@/components/second-part";

import PeripheralCategories from "@/components/peripheral-categories";
// import PopularCategory from "@/components/popular-category";
import CustomerReviews from "@/components/customer-reviews";
const fakeCustomerReviews = [
  {
    id: 1,
    name: "Amit Sharma",
    review: "Amazing service and super fast delivery! The product quality exceeded my expectations.",
    rating: 5,
    avatar: undefined,
  },
  {
    id: 2,
    name: "Priya Verma",
    review: "Great prices and a fantastic selection. Will definitely shop here again!",
    rating: 4,
    avatar: undefined,
  },
  {
    id: 3,
    name: "Rahul Singh",
    review: "Customer support was very helpful and resolved my issue quickly.",
    rating: 5,
    avatar: undefined,
  },
  {
    id: 4,
    name: "Sneha Patel",
    review: "Loved the packaging and the product works perfectly. Highly recommended!",
    rating: 5,
    avatar: undefined,
  },
  {
    id: 5,
    name: "Vikram Joshi",
    review: "Good experience overall, but delivery took a day longer than expected.",
    rating: 4,
    avatar: undefined,
  },
  {
    id: 6,
    name: "Meera Nair",
    review: "Website is easy to use and checkout was smooth. Will buy again!",
    rating: 5,
    avatar: undefined,
  },
];

// Example data for the AdProductGrid component
const exampleFeaturedPoster = {
  id: 1,
  image: "/Poster/msi-rtx-4060-gpu-deal-02.webp",
  ctaText: "SHOP NOW",
}
const exampleFeaturedProcessor = {
  id: 1,
  image: "/Poster/msi-rtx-4060-gpu-deal-02.webp",
  ctaText: "SHOP NOW",
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
const exampleProcessors = [
  {
    id: 1,
    name: "AMD Ryzen 3 3200G Processor with Radeon Vega 8 Graphics",
    image: "/processor-1.png",
    originalPrice: 13500,
    salePrice: 5600,
    discount: 59,
    soldOut: false
  },
  {
    id: 2,
    name: "AMD Ryzen 5 3400G Processor with Radeon RX Vega 11 Graphics",
    image: "/processor-2.png",
    originalPrice: 21500,
    salePrice: 6350,
    discount: 70,
    soldOut: false
  },
  {
    id: 3,
    name: "Intel Core i3-9350KF Processor",
    image: "/processor-3.png",
    originalPrice: 9450,
    salePrice: 8150,
    discount: 14,
    soldOut: false
  },
  {
    id: 4,
    name: "AMD Ryzen 5 5600X Processor",
    image: "/processor-4.png",
    originalPrice: 34400,
    salePrice: 12700,
    discount: 63,
    soldOut: false
  },
  {
    id: 5,
    name: "Intel Core i5-10400 Processor",
    image: "/processor-5.png",
    originalPrice: 19500,
    salePrice: 13950,
    discount: 28,
    soldOut: false
  },
  {
    id: 6,
    name: "AMD Ryzen 5 5600F Desktop Processor",
    image: "/processor-6.png",
    originalPrice: 15000,
    salePrice: 9950,
    discount: 34,
    soldOut: false
  },
  {
    id: 7,
    name: "AMD Ryzen 5 8500G Processor with Radeon Graphics",
    image: "/processor-7.png",
    originalPrice: 30000,
    salePrice: 15000,
    discount: 50,
    soldOut: false
  },
  {
    id: 8,
    name: "Intel Core Ultra 5 225F Processor",
    image: "/processor-8.png",
    originalPrice: 34000,
    salePrice: 17000,
    discount: 50,
    soldOut: false
  }
];
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

const peripheralCategories = [
  {
    id: 1,
    image: "/printer.webp"
  },
  {
    id: 2,
    image: "/laptop-cooler.webp"
  },
  {
    id: 3,
    image: "/Pendrive.webp"
  },
  {
    id: 4,
    image: "/router.webp"
  },
  {
    id: 5,
    image: "/ups.webp"
  },
  {
    id: 6,
    image: "/pentablet.webp"
  },
  {
    id: 7,
    image: "/webcam.webp"
  },
  {
    id: 8,
    image: "/surge-protector.webp"
  },
  {
    id: 9,
    image: "/speaker.webp"
  },
  {
    id: 10,
    image: "/software.webp"
  }
];

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <FirstPart />
      <SecondPart />
      {/* <PopularCategory categories={[
        { id: 1, image: "/processor.webp" },
        { id: 2, image: "/motherboard.webp" },
        { id: 3, image: "/cpu-cooler.webp" },
        { id: 4, image: "/memory.webp" },
        { id: 5, image: "/storage.webp" },
        { id: 6, image: "/monitor.webp" },
        { id: 7, image: "/power-supply.webp" },
        { id: 8, image: "/cabinet.webp" },
      ]} /> */}
      <AdProductGrid
        featuredPoster={exampleFeaturedPoster}
        categoryTitle="New Gen Graphics Cards"
        products={exampleProducts}
        maxProducts={8}
      />
      <BestSellingCarousel title="Best Selling Motherboards" products={bestSellingMotherboards} />
      <AdProductGrid
        featuredPoster={exampleFeaturedProcessor}
        categoryTitle="New Gen Processors"
        products={exampleProcessors}
        maxProducts={8}
      />

      <PeripheralCategories categories={peripheralCategories} />
      <CustomerReviews reviews={fakeCustomerReviews} />
    </div>
  );
}
