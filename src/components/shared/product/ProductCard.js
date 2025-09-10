import Link from 'next/link'
import Image from 'next/image'
import ImageHover from './ImageHover'

const ProductCard = ({
    product,
    hasBorder = false,
    hasDetail = false
}) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <div className={`relative ${hasBorder ? 'border p-4 rounded-lg' : ''}`}>
                <div className="relative h-48 mb-4">
                    {product.image.length > 1 ? (
                        <ImageHover
                            src={product.image[0]}
                            hoverSrc={product.image[1]}
                            alt={product.name}
                            className="w-full h-full"
                        />
                    ) : (
                        <Image
                            src={product.image[0]}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    )}
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-base text-gray-500">{product.avgRating}</p>
                <p className="text-base font-semibold">${product.price}</p>
                
            </div>
        </Link>
    )
}

export default ProductCard
