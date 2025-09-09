import Link from 'next/link'
import Image from 'next/image'
import ImageHover from './image-hover'

const ProductCard = ({
  product,
  hasBorder = false,
  hasDetail = false
}) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className={`relative ${hasBorder ? 'border p-4 rounded-lg' : ''}`}>
        <div className="relative h-48 mb-4">
          {product.images.length > 1 ? (
            <ImageHover
              src={product.images[0]}
              hoverSrc={product.images[1]}
              alt={product.name}
              className="w-full h-full"
            />
          ) : (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain"
            />
          )}
        </div>
        </div>
    </Link>
  )
}

export default ProductCard
