'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product-card'
import { cn } from '@/lib/utils'

interface Product {
  id: string | number
  imageUrl: string
  title?: string
  price?: string
  aspectRatio?: "square" | "portrait" | "landscape" | "auto"
}

interface ProductCarouselProps {
  products: Product[]
  title?: string
  className?: string
  autoPlay?: boolean
  interval?: number
  cardAspectRatio?: "square" | "portrait" | "landscape" | "auto"
}

// Calculate how many items to show per view based on screen size
function useResponsiveItemsCount() {
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setItemsPerView(1) // Small mobile
      } else if (width < 768) {
        setItemsPerView(2) // Mobile/Tablet
      } else if (width < 1024) {
        setItemsPerView(3) // Tablet/Small laptop
      } else {
        setItemsPerView(4) // Desktop
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return itemsPerView
}

const ProductCarousel = ({
  products,
  title,
  className,
  autoPlay = false,
  interval = 5000,
  cardAspectRatio = "landscape"
}: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemsPerView = useResponsiveItemsCount()

  // Navigation handlers with useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= products.length 
        ? 0 
        : prevIndex + 1
    )
  }, [itemsPerView, products.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 
        ? Math.max(0, products.length - itemsPerView) 
        : prevIndex - 1
    )
  }, [itemsPerView, products.length])

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || isHovering) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovering, nextSlide])

  // Get visible products based on current index and items per view
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView)

  // Handle if we don't have enough products to fill the view
  if (visibleProducts.length < itemsPerView) {
    const remaining = itemsPerView - visibleProducts.length
    visibleProducts.push(...products.slice(0, remaining))
  }

  return (
    <div 
      className={cn("w-full relative py-6", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Title section */}
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={prevSlide}
              aria-label="Previous products"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={nextSlide}
              aria-label="Next products"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            width: `${(products.length / itemsPerView) * 100}%`
          }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`px-2 flex-shrink-0`}
              style={{ width: `${100 / products.length}%` }}
            >
              <ProductCard 
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                aspectRatio={product.aspectRatio || cardAspectRatio}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile navigation dots */}
      <div className="flex justify-center gap-1 mt-4 md:hidden">
        {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              currentIndex >= index * itemsPerView && 
              currentIndex < (index + 1) * itemsPerView
                ? "bg-primary"
                : "bg-gray-300 dark:bg-gray-600"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side navigation arrows for larger screens */}
      <div className="hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10 shadow-md border-gray-200 dark:border-gray-800"
          onClick={prevSlide}
          aria-label="Previous products"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10 shadow-md border-gray-200 dark:border-gray-800"
          onClick={nextSlide}
          aria-label="Next products"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default ProductCarousel
