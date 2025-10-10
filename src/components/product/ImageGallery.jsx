
"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
const ImageGallery = ({ images, productName }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handlePrevious = () => {
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
    }
    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-secondary rounded-2xl overflow-hidden group">
                <div
                    className="relative w-full h-full cursor-zoom-in"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                >
                    <Image
                        src={images[selectedImage] || "/placeholder.svg"}
                        alt={`${productName} - Image ${selectedImage + 1}`}
                        fill
                        className={`object-cover transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
                        style={
                            isZoomed
                                ? {
                                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                                }
                                : undefined
                        }
                        priority
                    />
                </div>

                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-5 h-5" />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    {selectedImage + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden transition-all ${selectedImage === index ? "ring-2 ring-accent scale-105" : "hover:scale-105 opacity-70 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={`${productName} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Fullscreen Dialog */}
            <Dialog open={false}>
                <DialogContent className="max-w-7xl">
                    <div className="relative aspect-square">
                        <Image
                            src={images[selectedImage] || "/placeholder.svg"}
                            alt={`${productName} - Fullscreen`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ImageGallery
