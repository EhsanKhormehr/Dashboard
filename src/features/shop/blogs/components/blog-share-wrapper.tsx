import { Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogShareWrapper = () => {
  return (
    <div className="bg-surface rounded-xl shadow-soft-card px-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 py-5">
          <Share2 />
          <span className="font-extrabold">Share</span>
        </div>
        <div className="flex gap-2">
          <Link href={"/"} className="bg-background p-2 hover:bg-primary transition duration-300 rounded-sm">
            <Image
              src={"/shop/telegram.svg"}
              width={20}
              height={20}
              alt="share"
              className="dark:invert"
            />
          </Link>
          <Link href={"/"} className="bg-background p-2 hover:bg-primary transition duration-300 rounded-sm">
            <Image
              src={"/shop/instagram.svg"}
              width={20}
              height={20}
              alt="share"
              className="dark:invert"
            />
          </Link>
          <Link href={"/"} className="bg-background p-2 hover:bg-primary transition duration-300 rounded-sm">
            <Image
              src={"/shop/whatsapp.svg"}
              width={20}
              height={20}
              alt="share"
              className="dark:invert"
              
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogShareWrapper;
