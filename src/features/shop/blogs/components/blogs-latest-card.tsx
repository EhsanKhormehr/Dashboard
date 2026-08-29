import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LatestBlogCardProps = {
  id: string;
  title: string;
  category: string;
  slug: string;
  createdAt: Date;
};

const BlogsLatestCard = ({
  title,
  category,
  id,
  slug,
  createdAt,
}: LatestBlogCardProps) => {
  return (
    <div className="flex items-center rounded-md overflow-hidden">
      <div className="hidden md:flex">
        <Link href={`/blogs/${slug}`} className="w-[120px] h-auto lg:w-[280px] lg:h-[170px]">
          <Image
            src={"/shop/blog-1.jpg"}
            width={1000}
            height={1000}
            alt="blog"
            className="w-full h-auto lg:w-[280px] lg:h-[170px] object-cover rounded-xl "
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 h-full ml-3">
        <Link
          href={`/blogs/categories/${category}`}
          className="inline-flex self-start rounded-full text-xs border-primary/70 border-1 px-4 py-1 text-primary bg-blue-100 font-bold dark:bg-primary/10 dark:text-blue-400 capitalize"
        >
          {category}
        </Link>
        <Link
          href={`/blogs/${slug}`}
          className="text-base md:text-lg font-extrabold my-3 break-all line-clamp-3"
        >
          {title}
        </Link>
        <div className="self-end">
          <Link
            href={`/blogs/${slug}`}
            className="flex items-center text-sm hover:text-primary transition duration-300 font-bold"
          >
            Read More
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsLatestCard;
