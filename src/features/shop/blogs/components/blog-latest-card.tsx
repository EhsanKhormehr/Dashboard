import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLatestCard = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 py-2 border-b last:border-0">
      <Image
        src={"/shop/blog-1.jpg"}
        width={400}
        height={400}
        alt="blog"
        className="w-[80px] h-[60px] object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold line-clamp-2">
          How to Choose the Best Gaming Keyboard in 2026
        </p>
        <span className="self-end text-xs text-muted-foreground">
          2 Days Ago
        </span>
      </div>
    </Link>
  );
};

export default BlogLatestCard;
