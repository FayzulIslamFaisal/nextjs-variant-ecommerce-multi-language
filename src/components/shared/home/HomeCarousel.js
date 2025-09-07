import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import data from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

const HomeCarousel = () => {
  return (
    <Carousel className="w-full relative" 
    opts={{
        loop: true,
      }}
      
    >
      <CarouselContent>
        {data?.carousels
          ?.filter((carousel) => carousel.isPublished)
          .map((carousel) => (
            <CarouselItem key={carousel.id} className="relative">
              <div className="w-full h-[600px] relative">
                <Image
                  src={carousel.image}
                  alt={carousel.title}
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center text-white p-4">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {carousel.title}
                  </h2>
                  <Link
                    href={carousel.url}
                    className="bg-primary px-6 py-2 rounded-md text-white hover:bg-primary/90 transition"
                  >
                    {carousel.buttonCaption}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-black/80 text-white hover:text-white hover:bg-black/60 rounded-full" />
      <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-black/80 text-white hover:text-white hover:bg-black/60 rounded-full" />
    </Carousel>
  )
}

export default HomeCarousel
