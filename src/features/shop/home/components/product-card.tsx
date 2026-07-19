import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePageProductCard = () => {
  return (
    <div className="bg-chart-1/40 rounded-sm px-4 py-6">
      <div className="flex justify-end cursor-pointer">
        <Heart strokeWidth={1.5} />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={"/shop/iphone-14.png"}
          width={160}
          height={160}
          alt="iphone"
        />
        <span className="my-4 font-semibold text-center">
          Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
        </span>
        <span className="text-xl font-bold">$900</span>
        <Link href={"/"} className="my-6 text-white bg-black font-semibold rounded-md py-4 w-4/5 text-center">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default HomePageProductCard;
