// Example usage of the AdProductGrid component

import AdProductGrid from "@/components/ad-product-grid"

// Example data structure
const exampleFeaturedPoster = {
    id: 1,
    title: "RTX™ 4060",
    subtitle: "VENTUS",
    price: "₹29,399",
    image: "/path-to-your-featured-product-image.jpg", // Replace with actual image path
    ctaText: "SHOP NOW",
    backgroundColor: "bg-gradient-to-br from-blue-400 to-blue-600" // Optional custom background
}

const exampleProducts = [
    {
        id: 1,
        name: "Zotac RTX 5050 Twin Edge 8GB GDDR6 Graphics Card",
        image: "/path-to-product-1.jpg", // Replace with actual image paths
        originalPrice: 32450,
        salePrice: 28450,
        discount: 31,
        soldOut: false
    },
    {
        id: 2,
        name: "INNO3D RTX 5060 Twin X2 SFF 8GB GDDR7 Graphics Card",
        image: "/path-to-product-2.jpg",
        originalPrice: 34880,
        salePrice: 30480,
        discount: 36,
        soldOut: false
    },
    {
        id: 3,
        name: "INNO3D RTX 5060 Twin X2 OC SFF 8GB GDDR7 Graphics Card",
        image: "/path-to-product-3.jpg",
        originalPrice: 33260,
        salePrice: 31260,
        discount: 37,
        soldOut: false
    },
    {
        id: 4,
        name: "ZOTAC RTX 5060 Solo 8GB GDDR7 Graphics Card",
        image: "/path-to-product-4.jpg",
        originalPrice: 33110,
        salePrice: 31600,
        discount: 35,
        soldOut: false
    },
    // Add more products as needed...
]

// Usage in your page component
export default function ExamplePage() {
    return (
        <div>
            <AdProductGrid
                featuredPoster={exampleFeaturedPoster}
                categoryTitle="GEFORCE RTX 50 SERIES"
                products={exampleProducts}
                maxProducts={8} // Optional: limit number of products shown
            />
        </div>
    )
}
