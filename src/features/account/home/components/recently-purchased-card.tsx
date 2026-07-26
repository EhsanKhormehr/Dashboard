import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductStatus, PurchasedProduct } from "../types/types";

const productStatusClassName: Record<ProductStatus, string> = {
  delivered: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  processing: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  shipped: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  cancelled: "bg-red-500/10 text-red-600 dark:text-red-400",
};

const productStatusLabel: Record<ProductStatus, string> = {
  delivered: "Delivered",
  processing: "Processing",
  pending: "Pending",
  shipped: "Shipped",
  cancelled: "Cancelled",
};

type RecentlyPurchasedCardProps = {
  product: PurchasedProduct;
};

const RecentlyPurchasedCard = ({ product }: RecentlyPurchasedCardProps) => {
  return (
    <div className="shadow-card rounded-xl flex flex-col justify-between">
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
