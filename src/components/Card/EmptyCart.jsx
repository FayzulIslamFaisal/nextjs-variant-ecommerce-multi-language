import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmptyCart = () => {
    return (
        <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
            <div className="rounded-full bg-secondary p-6 mb-4">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-sm">
                Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground"
            >
                Continue Shopping
            </Button>
        </div>
    )
}

export default EmptyCart
