"use client"

import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"


interface Product {
  id: number
  image: string
  name: string
  oldPrice?: string
  newPrice: string
  discount?: string
  soldOut?: boolean
  buttonLabel?: string
}

interface CarouselProps {
  products: Product[]
}

const BestSellingCarousel = ({ products, title }: CarouselProps & { title: string }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1.3,
          spacing: 12,
        },
      },
    },
  })

  useEffect(() => {
    if (instanceRef.current) {
      const interval = setInterval(() => {
        instanceRef.current?.next()
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [instanceRef])

  return (
    <div className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Card key={product.id} className="keen-slider__slide border relative">
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                -{product.discount}
              </span>
            )}
            {product.soldOut && (
              <span className="absolute top-2 left-2 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                SOLD OUT
              </span>
            )}
            <CardContent className="p-4 flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain mb-4"
              />
              <p className="text-sm font-medium text-center min-h-[48px]">{product.name}</p>
              <div className="text-center flex flex-row-reverse  justify-center items-center gap-2">
                {product.oldPrice && (
                  <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>
                )}
                <p className="text-red-600 font-bold text-lg">{product.newPrice}</p>
              </div>
              <InteractiveHoverButton
                disabled={product.soldOut}
                className={`mt-3 w-full border-0 ${
                  product.soldOut
                    ? "bg-gray-400"
                    : "bg-red-500 "
                }`}
                aria-label={product.soldOut ? "Read More" : "Add to Cart"}
              >
                {product.soldOut ? "Sold Out" : product.buttonLabel || "ADD TO CART"}
              </InteractiveHoverButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BestSellingCarousel
