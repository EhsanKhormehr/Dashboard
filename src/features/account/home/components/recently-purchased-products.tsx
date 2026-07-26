import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RecentlyPurchasedCard from "./recently-purchased-card";
import { ProductStatus, PurchasedProduct } from "../types/types";

export const purchasedProducts: PurchasedProduct[] = [
  {
    id: 1,
    title: "Apple AirPods Pro 2nd Generation",
    image: "/images/products/airpods-pro.png",
    price: 249,
    status: "delivered",
    purchasedAt: "2026-07-20",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless Headphones",
    image: "/images/products/sony-headphones.png",
    price: 399,
    status: "processing",
    purchasedAt: "2026-07-18",
  },
  {
    id: 3,
    title: "Apple Watch Series 9",
    image: "/images/products/apple-watch.png",
    price: 429,
    status: "shipped",
    purchasedAt: "2026-07-16",
  },
  {
    id: 4,
    title: "Logitech MX Master 3S Mouse",
    image: "/images/products/mx-master.png",
    price: 99,
    status: "pending",
    purchasedAt: "2026-07-14",
  },
];

const RecentlyPurchasedProducts = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
      <div className="flex justify-between items-center">
        <ShopTitle title="Recently Purchased Products" className="text-md" />
        <Button asChild variant={"secondary"}>
          <Link href={"/account/orders"}>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
        {purchasedProducts.map((product) => (
          <RecentlyPurchasedCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyPurchasedProducts;
