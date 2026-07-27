import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {
  stockStatusLabels,
  stockStatusVariants,
} from "../../shared/lib/stock-status";

const WishlistCard = () => {
  return (
    <div className="shadow-card rounded-xl flex flex-col justify-between">
      <div className="p-4 flex justify-end">
        <Heart className="cursor-pointer text-muted-foreground transition hover:scale-125  fill-transparent hover:fill-destructive hover:text-destructive size-6" />
      </div>
      <div className="flex justify-center items-center py-8 border-b">
        <Link href={"/"} className="w-full flex justify-center">
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
          slm
        </Link>
        <span className="block font-bold my-2">$900</span>
        <div className="flex justify-between items-center">
          <Badge className={`${stockStatusVariants["available"]}`}>
            {stockStatusLabels["available"]}
          </Badge>
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href={"/"}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
