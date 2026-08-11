import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PurchasedProduct } from "../../shared/types/types";
import { productStatusClassName, productStatusLabel } from "../../shared/lib/product-status";

type RecentlyPurchasedCardProps = {
  product: PurchasedProduct;
};

const RecentlyPurchasedCard = ({ product }: RecentlyPurchasedCardProps) => {
  return (
    <div className="shadow-soft-card rounded-xl flex flex-col justify-between bg-background dark:bg-background/40">
      <div className="flex justify-center items-center py-8 border-b">
        <Link href={"/"}>
          <Image
            src={"/shop/iphone-14.png"}
            width={130}
            height={130}
            alt="iphone"
          />
        </Link>
      </div>
      <div className="p-4">
        <Link href={"/"} className="font-bold">
          {product.title}
        </Link>
        <span className="block font-bold my-2">${product.price}</span>
        <div className="flex justify-between items-center">
          <Badge className={`${productStatusClassName[product.status]}`}>{productStatusLabel[product.status]}</Badge>
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href={"/"}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPurchasedCard;
