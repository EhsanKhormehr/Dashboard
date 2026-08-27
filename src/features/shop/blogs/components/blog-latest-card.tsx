import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Prisma } from "../../../../../generated/prisma/client";
import { formatDistanceToNow } from "date-fns";

type BlogLatestCardProps = {
  latestArticle: Prisma.BlogGetPayload<{
    select: {
      id: true;
      title: true;
      createdAt: true;
      category: true;
      slug: true;
    };
    orderBy: {
      createdAt: "desc";
    };
    take: 4;
  }>;
};

const BlogLatestCard = ({ latestArticle }: BlogLatestCardProps) => {
  return (
    <Link
      href={`/blogs/${latestArticle.slug}`}
      className="flex items-center gap-2 py-2 border-b last:border-0"
    >
      <Image
        src={"/shop/blog-1.jpg"}
        width={400}
        height={400}
        alt="blog"
        className="w-[80px] h-[60px] object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold line-clamp-2">{latestArticle.title}</p>
        <span className="self-end text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(latestArticle.createdAt), {
            addSuffix: true,
          })}
        </span>
      </div>
    </Link>
  );
};

export default BlogLatestCard;
