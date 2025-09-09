import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/util/formatter'
import ProductPrice from './product-price'
import ImageHover from './image-hover'
import Rating from './Rating'


const ProductCard = ({
    product,
    hasBorder = false,
    hasDetail = false,
    className
}) => {
    return (
        <div className={cn('group cursor-pointer', className)}>
            {hasBorder ? (
                <div className={cn('p-4 space-y-2 border rounded-lg')}>
                    <div className="text-center">
                        <p className="font-bold text-sm text-gray-700">{product.brand}</p>
                    </div>

                    <Link href={`/products/${product.slug}`}>
                        <div className="relative h-48 mb-3">
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
                    </Link>

                    <Link href={`/products/${product.slug}`}>
                        <h3
                            className="overflow-hidden text-ellipsis whitespace-nowrap font-medium text-sm"
                            title={product.name}
                        >
                            {product.name}
                        </h3>
                    </Link>

                    <div className="flex items-center justify-center space-x-2">
                        <Rating rating={product.avgRating} size={4} />
                        <span className="text-xs text-gray-600">
                            ({formatNumber(product.reviewCount)})
                        </span>
                    </div>

                    {product.tags?.includes('today-deal') && (
                        <div className="text-center">
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                                Today's Deal
                            </span>
                        </div>
                    )}

                    <div className="text-center">
                        <ProductPrice
                            price={product.price}
                            listPrice={product.listPrice}
                            isDeal={product.isDeal}
                            forListing={true}
                        />
                    </div>
                </div>
            ) : (
                <div className="p-2 space-y-2">
                    <Link href={`/products/${product.slug}`}>
                        <div className="relative h-48">
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
                    </Link>

                    {hasDetail && (
                        <div className="p-2 space-y-2 text-center">
                            <p className="font-bold text-sm text-gray-700">{product.brand}</p>

                            <Link href={`/products/${product.slug}`}>
                                <h3 className="overflow-hidden text-ellipsis line-clamp-2 font-medium text-sm h-10">
                                    {product.name}
                                </h3>
                            </Link>

                            <div className="flex items-center justify-center space-x-2">
                                <Rating rating={product.avgRating} size={4} />
                                <span className="text-xs text-gray-600">
                                    ({formatNumber(product.reviewCount)})
                                </span>
                            </div>

                            {product.tags?.includes('today-deal') && (
                                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                                    Today's Deal
                                </span>
                            )}

                            <ProductPrice
                                price={product.price}
                                listPrice={product.listPrice}
                                isDeal={product.isDeal}
                                forListing={true}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProductCard