import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PosterCardProps {
    imageUrl: string
    title?: string
    price?: string
    className?: string
    alt?: string
    priority?: boolean
    quality?: number
    buttonText?: string
}

const PosterCard = ({
    imageUrl,
    title,
    price,
    className,
    alt = "Poster image",
    priority = false,
    quality = 95,
    buttonText = "Buy Now"
}: PosterCardProps) => {
    return (
        <div className={cn(
            "group relative w-full h-full overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800 transition-all hover:shadow-lg",
            className
        )}>
            {/* Full container for image */}
            <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt={alt}
                    fill
                    priority={priority}
                    quality={quality}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                    unoptimized={imageUrl.startsWith('http')}
                />

                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {title && (
                        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">
                            {title}
                        </h2>
                    )}

                    {price && (
                        <p className="text-white text-xl md:text-2xl font-semibold mb-4 drop-shadow-lg">
                            {price}
                        </p>
                    )}

                    <div className="flex justify-start">
                        <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 transform hover:scale-105 px-6 py-3 text-lg font-semibold">
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PosterCard
