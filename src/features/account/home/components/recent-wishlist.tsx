import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RecentWishlistCard from "./recent-wishlist-card";
import { WishlistItem } from "../types/types";

export const wishlistItems: WishlistItem[] = [
  {
    id: "1",
    title: "Apple AirPods Pro",
    price: 249,
    image: "/images/products/airpods-pro.png",
    slug: "apple-airpods-pro",
    stockStatus: "available",
  },
  {
    id: "2",
    title: "Sony WH-1000XM5",
    price: 399,
    image: "/images/products/sony-wh-1000xm5.png",
    slug: "sony-wh-1000xm5",
    stockStatus: "unavailable",
  },
];

const RecentWishlist = () => {
  return (
    <div>
      <div className="bg-surface shadow-card rounded-2xl mt-5 px-4 py-8">
        <div className="flex justify-between items-center">
          <ShopTitle title="Wishlist Preview" className="text-md" />
          <Button asChild variant={"secondary"}>
            <Link href={"/account/wishlist"}>
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {wishlistItems.map((product) => (
            <RecentWishlistCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWishlist;
