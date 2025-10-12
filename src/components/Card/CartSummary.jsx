import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";

const CartSummary = ({
    subtotal = 0,
    shipping = 0,
    tax = 0,
    total = 0,
    itemCount = 0,
}) => {
    return (
        <div className="sticky top-4 space-y-4 rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

            <div className="space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                        Subtotal ({itemCount || 0} {itemCount === 1 ? "item" : "items"})
                    </span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                        {shipping === 0 ? (
                            <span className="text-accent">Free</span>
                        ) : (
                            `$${shipping.toFixed(2)}`
                        )}
                    </span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-accent">${total.toFixed(2)}</span>
                </div>
            </div>

            <Button className="w-full h-12 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Proceed to Checkout
            </Button>

            <div className="space-y-2 text-xs text-muted-foreground">
                <p className="flex items-center gap-1">
                    <span className="text-accent">✓</span> Free shipping on orders over $100
                </p>
                <p className="flex items-center gap-1">
                    <span className="text-accent">✓</span> 30-day return policy
                </p>
                <p className="flex items-center gap-1">
                    <span className="text-accent">✓</span> Secure checkout
                </p>
            </div>
        </div>
    );
};

export default CartSummary;
