'use client'

import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import PosterCard from "./poster-card"

interface Product {
  imageUrl: string
  title?: string
  price?: string
  priority?: boolean
  quality?: number
  buttonText?: string
}

interface CarouselProps {
  products: Product[]
  interval?: number
  className?: string
  height?: string
}

const SingleCardCarousel = ({
  products,
  interval = 3000,
  className = "",
  height = "h-[400px] md:h-[500px] lg:h-[600px]"
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: 1,
        spacing: 0, // Remove spacing to prevent next slide from being visible
        origin: "center", // Center the slides
      },
      drag: true,
      created() {
        setLoaded(true)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      breakpoints: {
        // Responsive settings for different screen sizes
        "(min-width: 768px)": {
          slides: { perView: 1 }
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, interval)
        }

        slider.on("created", () => {
          nextTimeout()
        })

        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)

        // Add mouse events to pause on hover
        slider.container.addEventListener("mouseenter", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseleave", () => {
          mouseOver = false
          nextTimeout()
        })

        return () => {
          clearNextTimeout()
        }
      },
    ]
  )

  // Timer is now handled in the Keen Slider plugin above

  return (
    <div className={`relative w-full max-w-full mx-auto overflow-hidden ${className}`}>
      <div ref={sliderRef} className={`keen-slider w-full ${height}`}>
        {products.map((product, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="w-full h-full">
              <PosterCard
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                className="h-full w-full rounded-xl"
                priority={index === 0 || product.priority}
                quality={100}
                buttonText={product.buttonText}
              />
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 shadow-md z-10 hidden sm:flex items-center justify-center"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 shadow-md z-10 hidden sm:flex items-center justify-center"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === idx ? "bg-primary scale-110" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SingleCardCarousel
