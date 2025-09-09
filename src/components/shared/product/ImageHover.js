/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'
import { useState } from 'react'


const ImageHover = ({ src, hoverSrc, alt, className }) => {
  const [isHovered, setIsHovered] = useState(false)
  let hoverTimeout

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => setIsHovered(true), 1000) // 1 second delay
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setIsHovered(false)
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100px"
        className="object-contain transition-opacity duration-500"
        style={{ opacity: isHovered ? 0 : 100 }}
      />
      <Image
        src={hoverSrc}
        alt={alt}
        fill
        sizes="100px"
        className="object-contain transition-opacity duration-500"
        style={{ opacity: isHovered ? 100 : 0 }}
      />
    </div>
  )
}

export default ImageHover