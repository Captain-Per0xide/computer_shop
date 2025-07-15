"use client"

import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Product {
  id: number
  image: string
  name?: string
  category?: string
}

interface CarouselProps {
  products: Product[]
}

const InfiniteProductCarousel = ({ products }: CarouselProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1.3,
          spacing: 12,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 14,
        },
      },
    },
  })

  // Autoplay functionality
  useEffect(() => {
    if (instanceRef.current) {
      const interval = setInterval(() => {
        instanceRef.current?.next()
      }, 8000) // 8 seconds
      
      return () => {
        clearInterval(interval)
      }
    }
  }, [instanceRef])

  return (
    <div ref={sliderRef} className="keen-slider ">
      {products.map((product) => (
        <Card key={product.id} className="keen-slider__slide shadow-md rounded-xl">
          <CardContent className=" flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.name || "Product"}
              width={400}
              height={350}
              className="rounded-md object-contain"
            />
            {(product.name || product.category) && (
              <h1 className="mt-2 text-xl text-center font-bold">
                {product.name || product.category}
              </h1>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default InfiniteProductCarousel
