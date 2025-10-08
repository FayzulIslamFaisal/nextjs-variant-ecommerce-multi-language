"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart } from "lucide-react"

const SearchResults = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [isFavorite, setIsFavorite] = useState(false)

    const discount = product.listPrice ? Math.round(((product.listPrice - product.price) / product.listPrice) * 100) : 0

    return (
        <Card className="group relative gap-2 py-0 overflow-hidden transition-all hover:shadow-lg w-full">
            <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden bg-muted w-full h-[120px]">
                    <Image
                        src={product.image[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Badges */}
                    <div className="absolute left-3 top-3 flex flex-col gap-2">
                        {discount > 0 && (
                            <Badge variant="destructive" className="font-semibold">
                                -{discount}%
                            </Badge>
                        )}
                        {product.countInStock && product.countInStock < 10 && (
                            <Badge variant="secondary" className="bg-orange-500 text-white">
                                Low Stock
                            </Badge>
                        )}
                    </div>

                    {/* Favorite Button */}
                    <Button
                        size="icon"
                        variant="secondary"
                        className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                        onClick={() => setIsFavorite(!isFavorite)}
                    >
                        <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="p-4 pt-0">
                {/* Brand & Category */}
                <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    {product.brand && <span>{product.brand.name}</span>}
                    {product.brand && product.category && <span>•</span>}
                    {product.category && <span>{product.category.name}</span>}
                </div>

                {/* Product Name */}
                <h3 className="mb-2 text-balance text-lg font-semibold leading-tight text-foreground line-clamp-2">
                    {product.name}
                </h3>

                {/* Description */}
                {product.description && (
                    <p className="mb-3 text-pretty text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                )}

                {/* Rating */}
                {product.avgRating && (
                    <div className="mb-3 flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.avgRating.toFixed(1)}</span>
                        </div>
                        {product.numReviews && (
                            <span className="text-xs text-muted-foreground">({product.numReviews} reviews)</span>
                        )}
                    </div>
                )}

                {/* Colors */}
                <div className="mb-3">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">Colors</p>
                    <div className="flex gap-2">
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`h-6 w-6 rounded-full border-2 transition-all ${selectedColor === color
                                    ? "border-primary ring-2 ring-primary ring-offset-2"
                                    : "border-border hover:border-primary"
                                    }`}
                                style={{
                                    backgroundColor: color.toLowerCase(),
                                }}
                                title={color}
                            />
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">Sizes</p>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <Badge key={size} variant="outline" className="text-xs">
                                {size}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                    {product.listPrice && product.listPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">${product.listPrice.toFixed(2)}</span>
                    )}
                </div>

                {/* Sales Count */}
                {product.numSales && product.numSales > 0 && (
                    <p className="mt-1 text-xs text-muted-foreground">{product.numSales} sold</p>
                )}
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>

    )
}

export default SearchResults
