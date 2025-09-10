import { Button } from "@/components/ui/button"
import Link from "next/link";

const SelectVariant = ({ product, size, color }) => {
  const SelectColor = color || product?.colors?.[0];
  const SelectSize = size || product?.sizes?.[0];

  return (
    <>
      {product?.colors?.length > 0 && (
        <div className="space-x-2 space-y-2">
          <div>Color</div>
          {product.colors.map((x, index) => (
            <Button
              variant="outline"
              key={index}
              asChild
              className={`${
                SelectColor === x
                  ? "bg-primary border-2 border-primary text-primary-foreground"
                  : "border-2 border-transparent text-black"
              }`}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({ color: x, size: SelectSize })}`}
              >
                <div
                  className="w-4 h-4 rounded-full border border-muted-foreground"
                  style={{ backgroundColor: x }}
                ></div>
              </Link>
            </Button>
          ))}
        </div>
      )}

      {product?.sizes?.length > 0 && (
        <div className="space-x-2 space-y-2">
          <div>Size</div>
          {product.sizes.map((x, index) => (
            <Button
              variant="outline"
              key={index}
              asChild
              className={`${
                SelectSize === x
                  ? "bg-primary border-2 border-primary text-primary-foreground"
                  : "border-2 border-transparent text-black"
              }`}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({ color: SelectColor, size: x })}`}
              >
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectVariant;
