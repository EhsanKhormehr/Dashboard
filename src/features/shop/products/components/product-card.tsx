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
  slug: string;
  categorySlug: string;
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
  slug,
  categorySlug,
}: HomeDiscountedCardProps) => {
  return (
    <div className="shadow-soft-card rounded-xl hover:-translate-y-1.5 transition-transform h-full flex flex-col bg-surface">
      {/* <div className=" p-4">
        <Heart className="size-[26px] hover:stroke-destructive hover:fill-destructive cursor-pointer" />
      </div> */}
      <Link
        href={`/products/${slug}`}
        className="w-full flex justify-center pb-2"
      >
        <Image
          src={image}
          width={500}
          height={500}
          alt="iphone"
          className="aspect-video object-cover py-3 rounded-xl"
        />
      </Link>
      <div className="px-4">
        <Link
          href={`/products/category/${categorySlug}`}
          className="block text-xs text-muted-foreground font-semibold"
        >
          {category}
        </Link>
        <Link href={`/products/${slug}`} className="font-bold my-3 block">
          {title}
        </Link>
      </div>
      <div className="flex justify-between items-center mt-auto px-4 pb-4">
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
