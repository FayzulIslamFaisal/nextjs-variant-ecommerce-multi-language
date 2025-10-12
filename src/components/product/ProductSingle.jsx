
"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import AddToCard from "@/components/AddToCard"
import BuyNowBtn from "@/components/BuyNowBtn"
import { Star, Package, Shield, Truck } from "lucide-react"

import ImageGallery from "./ImageGallery";
import { useSelector } from "react-redux"
const colorMap = {
    Red: "bg-red-500",
    Black: "bg-black",
    White: "bg-white border-2 border-border",
    Blue: "bg-blue-500",
    Green: "bg-green-500",
    Yellow: "bg-yellow-500",
}
const ProductSingle = ({ product }) => {
    console.log("Single product details:", product);
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[1])
    const [quantity, setQuantity] = useState(1)
    const discount = Math.round(((product.listPrice - product.price) / product.listPrice) * 100);
    
    return (
        <div className="container mx-auto px-4 py-8 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Gallery Section */}
                <div className="lg:sticky lg:top-8 lg:self-start">
                    <ImageGallery images={product.image} productName={product.name} />
                </div>

                {/* Product Info Section */}
                <div className="space-y-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{product.category.name}</span>
                        <span>/</span>
                        <span>{product.brand.name}</span>
                    </div>

                    {/* Product Title */}
                    <div className="space-y-2">
                        <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight text-balance">{product.name}</h1>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < product.avgRating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                {product.numReviews} {product.numReviews === 1 ? "review" : "reviews"}
                            </span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-light">${product.price.toFixed(2)}</span>
                        <span className="text-xl text-muted-foreground line-through">${product.listPrice.toFixed(2)}</span>
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            Save {discount}%
                        </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                    {/* Color Selection */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Color</label>
                            <span className="text-sm text-muted-foreground">{selectedColor}</span>
                        </div>
                        <div className="flex gap-3">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-12 h-12 rounded-full ${colorMap[color] || "bg-gray-500"} transition-all ${selectedColor === color ? "ring-2 ring-offset-2 ring-accent scale-110" : "hover:scale-105"
                                        }`}
                                    aria-label={`Select ${color}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Size</label>
                            <button className="text-sm text-accent hover:underline">Size Guide</button>
                        </div>
                        <div className="flex gap-3">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-6 py-3 rounded-lg border-2 transition-all font-medium ${selectedSize === size
                                        ? "border-accent bg-accent text-accent-foreground"
                                        : "border-border hover:border-accent"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">Quantity</label>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-10 rounded-lg border-2 border-border hover:border-accent transition-colors"
                            >
                                -
                            </button>
                            <span className="w-12 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(Math.min(product.countInStock, quantity + 1))}
                                className="w-10 h-10 rounded-lg border-2 border-border hover:border-accent transition-colors"
                            >
                                +
                            </button>
                            <span className="text-sm text-muted-foreground ml-2">{product.countInStock} in stock</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <AddToCard product={product} />
                        <BuyNowBtn product={product} />
                    </div>

                    {/* Features */}
                    <Card className="p-6 bg-secondary/50">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium text-sm">Free Shipping</p>
                                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium text-sm">Secure Payment</p>
                                    <p className="text-xs text-muted-foreground">100% secure transactions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Package className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium text-sm">Easy Returns</p>
                                    <p className="text-xs text-muted-foreground">30-day return policy</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <p className="font-medium text-sm">Quality Assured</p>
                                    <p className="text-xs text-muted-foreground">Premium materials</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Product Details */}
                    <div className="space-y-4 pt-4 border-t">
                        <h3 className="font-medium">Product Details</h3>
                        <div className="grid gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Brand</span>
                                <span className="font-medium">{product.brand.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Category</span>
                                <span className="font-medium">{product.category.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">SKU</span>
                                <span className="font-medium font-mono text-xs">{product.id.slice(-8).toUpperCase()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Availability</span>
                                <span className="font-medium text-accent">In Stock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSingle
