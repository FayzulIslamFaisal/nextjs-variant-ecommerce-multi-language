import { addToCard } from "@/app/reduxFeatures/addToCardSlice"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import { useDispatch } from "react-redux"
const BuyNowBtn = ({ product }) => {
    const dispatch = useDispatch()
  return (
    <Button
        size="lg"
        // onClick={() => dispatch(addToCard(product))}
        variant="outline"
        className="flex-1 border-2 cursor-pointer border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
    >
        <Zap className="w-5 h-5 mr-2" />
        Buy Now
    </Button>
  )
}

export default BuyNowBtn
