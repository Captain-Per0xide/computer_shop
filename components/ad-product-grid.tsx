"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"

interface Product {
    id: number
    name: string
    image: string
    originalPrice: number
    salePrice: number
    discount: number
    soldOut?: boolean
}

interface FeaturedPoster {
    id: number
    image: string
    ctaText: string
    backgroundColor?: string
}

interface AdProductGridProps {
    featuredPoster: FeaturedPoster
    categoryTitle: string
    products: Product[]
    maxProducts?: number
}

const AdProductGrid = ({
    featuredPoster,
    categoryTitle,
    products,
    maxProducts = 8
}: AdProductGridProps) => {
    const displayProducts = products.slice(0, maxProducts)

    const formatPrice = (price: number) => {
        return `₹${price.toLocaleString()}`
    }

    return (
        <div className="container mx-auto px-2 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured Poster - Left Side */}
                <div className="lg:col-span-1">
                    <Card className={`h-full overflow-hidden ${featuredPoster.backgroundColor || 'bg-gradient-to-br from-gray-800 via-gray-900 to-black'}`}>
                        <CardContent className=" flex flex-col justify-between text-white">
 
                                <Image
                                    src={featuredPoster.image}
                                    alt="Featured Poster"
                                    width={1000}
                                    height={1000}
                                    className="object-contain"
                                />
                            

                            <div className="mt-6">
                                <InteractiveHoverButton className="w-full bg-white text-red-600 hover:bg-gray-100 border-0">
                                    {featuredPoster.ctaText}
                                </InteractiveHoverButton>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Product Grid - Right Side */}
                <div className="lg:col-span-2">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-500">{categoryTitle}</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {displayProducts.map((product) => (
                            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-4">
                                    {/* Discount Badge */}
                                    <div className="relative mb-3">
                                        {product.discount > 0 && (
                                            <Badge className="absolute top-2 left-2 bg-red-600 text-white z-10">
                                                -{product.discount}%
                                            </Badge>
                                        )}
                                        {product.soldOut && (
                                            <Badge className="absolute top-2 left-2 bg-gray-700 text-white z-10">
                                                SOLD OUT
                                            </Badge>
                                        )}
                                        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium text-gray-400 line-clamp-2 min-h-[40px]">
                                            {product.name}
                                        </h4>

                                        <div className="space-y-1">
                                            {product.originalPrice !== product.salePrice && (
                                                <p className="text-xs text-gray-500 line-through">
                                                    {formatPrice(product.originalPrice)}
                                                </p>
                                            )}
                                            <p className="text-red-600 font-bold text-lg">
                                                {formatPrice(product.salePrice)}
                                            </p>
                                        </div>

                                        <InteractiveHoverButton
                                            disabled={product.soldOut}
                                            className={`w-full text-xs py-1 px-3 border-0 ${product.soldOut
                                                    ? "bg-gray-400"
                                                    : "bg-red-600 hover:bg-red-700"
                                                }`}
                                        >
                                            {product.soldOut ? "READ MORE" : "ADD TO CART"}
                                        </InteractiveHoverButton>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdProductGrid
