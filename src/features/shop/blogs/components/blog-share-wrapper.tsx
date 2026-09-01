import { Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogShareWrapper = () => {
  return (
    <div className="bg-surface rounded-xl shadow-soft-card px-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 py-5">
          <Share2 className="text-primary" />
          <span className="font-extrabold">Share</span>
        </div>
        <div className="flex gap-2">
          <Link href={"/"} className="bg-gray-400/70 dark:bg-background dark:hover:bg-primary p-2 hover:bg-primary transition duration-300 rounded-sm">
            <Image
              src={"/telegram.svg"}
              width={20}
              height={20}
              alt="share"
              className="invert"
            />
          </Link>
          <Link href={"/"} className="bg-gray-400/70 dark:bg-background dark:hover:bg-primary p-2 hover:bg-primary transition duration-300 rounded-sm">
            <Image
              src={"/instagram.svg"}
              width={20}
              height={20}
              alt="share"
              className="invert"
            />
          </Link>
          <Link href={"/"} className="bg-gray-400/70 dark:bg-background dark:hover:bg-primary p-2 hover:bg-primary transition duration-300 rounded-sm">
            <Image
              src={"/whatsapp.svg"}
              width={20}
              height={20}
              alt="share"
              className="invert"
              
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogShareWrapper;
