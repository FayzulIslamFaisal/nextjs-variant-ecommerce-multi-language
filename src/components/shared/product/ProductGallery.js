"use client";
import Image from "next/image";
import { useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ProductGallery = ({images}) => {
    const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className=" flex gap-2">
        <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            onMouseOver={() => setSelectedImage(index)}
            className={`bg-white rounded-lg overflow-hidden transition-all ${
              selectedImage === index
                ? 'ring-2 ring-blue-500 scale-105'
                : 'ring-1 ring-gray-300 hover:ring-blue-300'
            }`}
          >
            <Image 
              src={image} 
              alt={`Product thumbnail ${index + 1}`} 
              width={64} 
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="w-full">
        <Zoom>
          <div className="relative h-96 md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={images[selectedImage]} 
              alt="Product image"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-contain"
              priority
            />
          </div>
        </Zoom>
      </div>
    </div>



  )
}

export default ProductGallery
