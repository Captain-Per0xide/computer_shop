import React from "react";
import ProductCard from "./product-card";
import SingleCardCarousel from "./single-card-carousel";
import PosterCard from "./poster-card";
const dummyProducts = [
  {
    imageUrl: "/monitor-02.webp",
    title: "BenQ 24 Inch Monitor",
    priority: true,
    buttonText: "Shop Now"
  },
  {
    imageUrl: "/intel-game-offer.webp",
    title: "Intel Gaming Offer",
    buttonText: "Explore Deals"
  },
  {
    imageUrl: "/antec_monsoon_sale_main.webp",
    title: "Antec Monsoon sale",
    buttonText: "Learn More"
  }
]
const FirstPart = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full justify-between gap-6 md:gap-8 py-6">
      {/* Larger carousel that takes more space */}
      <div className="w-full md:w-3/5 lg:w-2/3 xl:w-3/4">
        <SingleCardCarousel
          products={dummyProducts}
          interval={6000}
          height="h-[350px] md:h-[400px] lg:h-[500px] xl:h-[750px]"
          className="shadow-lg rounded-xl overflow-hidden"
        />
      </div>

      {/* Side product cards */}
      <div className="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 flex flex-row md:flex-col justify-between items-stretch gap-4 py-6 md:gap-6">
        <div className="w-1/2 md:w-full h-[170px] md:h-[192px] lg:h-[342px]">
          <PosterCard
            imageUrl="/ms-performance-monster-bundle-offer--main.webp"
            className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-gray-100 dark:border-gray-800"
            title="Performance Monster Bundle"
            alt="Performance Monster Bundle"
            priority={true}
            quality={100}
          />
        </div>
        <div className="w-1/2 md:w-full h-[170px] md:h-[192px] lg:h-[342px]">
          <PosterCard
            imageUrl="/monsoon-tech-sale-live-now.webp"
            className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-gray-100 dark:border-gray-800"
            title="Monsoon Tech Sale"
            alt="Monsoon Tech Sale"
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
