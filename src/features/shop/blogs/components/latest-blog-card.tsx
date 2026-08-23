import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestBlogCard = () => {
  return (
    <div className="flex items-center rounded-md overflow-hidden">
      <div className="hidden md:flex">
        <Link href={"/"}>
          <Image
            src={"/shop/blog-1.jpg"}
            width={280}
            height={170}
            alt="blog"
            className="object-contain rounded-xl"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between h-full ml-3">
        <div className="inline-flex self-start rounded-full text-xs border-primary/70 border-1 px-4 py-1 text-primary bg-blue-100 font-bold dark:bg-primary/10 dark:text-blue-400">
          Gaming
        </div>
        <Link href={"/"} className="text-base md:text-lg font-extrabold my-3">
          How to Choose the Best Gaming Keyboard in 2026
        </Link>
        <div className="self-end">
          <Link href={"/"} className="flex items-center text-sm hover:text-primary transition duration-300 font-bold">
            Read More
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogCard;
