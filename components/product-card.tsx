import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  imageUrl: string
  title?: string
  price?: string
  className?: string
  aspectRatio?: "square" | "portrait" | "landscape" | "auto"
  width?: number
  height?: number
  alt?: string
  priority?: boolean
  quality?: number
}

const ProductCard = ({
  imageUrl,
  title,
  price,
  className,
  aspectRatio = "landscape",
  width = 1920,
  height = 1080,
  alt = "Product image",
  priority = false,
  quality = 95,
}: ProductCardProps) => {
  // Define aspect ratio classes
  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    auto: "aspect-auto",
  }

  return (
    <div className={cn(
      "group relative rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-all hover:shadow-lg",
      className
    )}>
      <div className={cn(
        "relative overflow-hidden w-full",
        aspectRatioClasses[aspectRatio]
      )}>
        <Image
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={quality}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          unoptimized={imageUrl.startsWith('http')} // Don't optimize external images
        />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/20" />
      </div>

      {/* Product info section - conditionally shown if title or price exists */}
      {(title || price) && (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          {title && <h3 className="text-white font-medium text-lg line-clamp-2">{title}</h3>}
          {price && <p className="text-white font-bold mt-1">{price}</p>}
        </div>
      )}

      {/* Button at bottom right */}
      <div className="absolute bottom-4 right-4 z-10">
        <Button className="bg-red-600 hover:bg-red-700 text-white shadow-md transition-transform duration-300 transform translate-y-0 group-hover:translate-y-[-4px]">
          Buy Now
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
