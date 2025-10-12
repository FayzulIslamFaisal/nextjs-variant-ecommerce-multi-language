import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    const discount = item.listPrice - item.price;
    const discountPercent = Math.round((discount / item.listPrice) * 100);

    return (
        <div className="group bg-card rounded-xl border border-border p-4 transition-all hover:shadow-md">
            <div className="flex gap-4">
                {/* Product Image */}
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img
                        src={item.image[0]}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    {discountPercent > 0 && (
                        <Badge className="absolute top-1 left-1 bg-destructive text-destructive-foreground text-xs">
                            -{discountPercent}%
                        </Badge>
                    )}
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col justify-between">
                    <div className="space-y-1">
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h3 className="font-semibold text-foreground line-clamp-1">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.brand.name}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onRemove(item.id)}
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex gap-2 text-sm">
                            <Badge variant="secondary" className="font-normal">
                                {item.selectedColor}
                            </Badge>
                            <Badge variant="secondary" className="font-normal">
                                Size {item.selectedSize}
                            </Badge>
                        </div>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-foreground">${item.price.toFixed(2)}</span>
                            {discountPercent > 0 && (
                                <span className="text-sm text-muted-foreground line-through">
                                    ${item.listPrice.toFixed(2)}
                                </span>
                            )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 p-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                disabled={item.quantity <= 1}
                                className="h-7 w-7"
                            >
                                <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.countInStock}
                                className="h-7 w-7"
                            >
                                <Plus className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem
