
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyCart } from "@/components/cart/EmptyCart";
import { mockCartItems } from "@/data/mockCart";
import { CartItem as CartItemType } from "@/types/product";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CardDetails = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItemType[]>(mockCartItems);

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    toast.success("Quantity updated");
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Shopping Cart</h1>
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-foreground">
                  Cart Items ({itemCount})
                </h2>
              </div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                itemCount={itemCount}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CardDetails;
