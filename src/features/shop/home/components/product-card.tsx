import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HomeDiscountedCardProps = {
  title: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  badge?: string;
};

const ProductCard = ({
  title,
  category,
  image,
  price,
  oldPrice,
  discount,
}: HomeDiscountedCardProps) => {
  return (
    <div className="shadow-soft-card rounded-xl p-4 hover:-translate-y-1.5 transition-transform h-full flex flex-col">
      <div>
        <Heart
          className="size-[26px] hover:stroke-destructive hover:fill-destructive cursor-pointer"
        />
      </div>
      <Link href={"/"} className="w-full flex justify-center py-7">
        <Image src={image} width={150} height={150} alt="iphone" />
      </Link>
      <span className="block text-xs text-muted-foreground font-semibold">
        {category}
      </span>
      <Link href={"/"} className="font-bold my-3 block">
        {title}
      </Link>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center gap-4">
          <span className="font-bold">${price}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${oldPrice}
            </span>
          )}
          {discount && <Badge variant={"destructive"}>{discount}%</Badge>}
        </div>
        <Button className="cursor-pointer">
          <ShoppingCart className="size-[22px]" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
