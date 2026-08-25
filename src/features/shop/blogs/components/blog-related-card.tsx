import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogRelatedCard = () => {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-soft-card">
      <Link href={"/"}>
        <Image
          src={"/shop/blog-1.jpg"}
          width={190}
          height={120}
          alt="blog"
          className="w-full h-auto object-contain"
        />
      </Link>
      <div className="p-3">
        <Link href={"/"} className="block text-sm font-bold">
          How to Choose the Best Gaming Keyboard in 2026
        </Link>
        <div className="flex justify-between mt-5 gap-2">
          <span className="text-xs font-bold">Ehsan Khormehr</span>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">2 Days Ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRelatedCard;
