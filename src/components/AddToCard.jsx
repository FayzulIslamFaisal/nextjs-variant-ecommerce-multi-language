"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { addToCard } from "@/app/reduxFeatures/addToCardSlice"
import { useRouter } from "next/navigation"

const AddToCard = ({ product }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleAddToCart = () => {
    dispatch(addToCard(product))
    router.push("/cart") // ✅ redirect to cart page
  }

  return (
    <Button
      size="lg"
      onClick={handleAddToCart}
      className="flex-1 bg-accent cursor-pointer hover:bg-accent/90 text-accent-foreground"
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </Button>
  )
}

export default AddToCard
