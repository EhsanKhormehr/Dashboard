import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WishlistItem } from "../../shared/types/types";
import { Badge } from "@/components/ui/badge";
import { stockStatusLabels, stockStatusVariants } from "../../shared/lib/stock-status";

type RecentWishlistCardProps = {
  product: WishlistItem;
};

const RecentWishlistCard = ({ product }: RecentWishlistCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl bg-background dark:bg-background/40">
      <div>
        <Image
          src={"/shop/iphone-14.png"}
          width={50}
          height={50}
          alt="iphone"
        />
      </div>
      <div className="flex flex-col mx-2">
        <span className="text-sm font-semibold text-foreground">
          {product.title}
        </span>
        <span className="mt-3 text-xs text-muted-foreground font-semibold">${product.price}</span>
      </div>
      <div className="flex flex-col items-center">
        <Button
          className="text-xs font-semibold"
          asChild
          variant={"outline"}
          size={"sm"}
        >
          <Link href={"/"}>
            View
            <ArrowRight />
          </Link>
        </Button>
        <Badge className={`${stockStatusVariants[product.stockStatus]} mt-3`}>
          {stockStatusLabels[product.stockStatus]}
        </Badge>
      </div>
    </div>
  );
};

export default RecentWishlistCard;
