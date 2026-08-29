import { formatDistanceToNow } from "date-fns";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogRelatedCardProps = {
  title: string;
  author: string | undefined;
  slug: string;
  createdAt: Date;
};

const BlogRelatedCard = ({
  title,
  author,
  slug,
  createdAt,
}: BlogRelatedCardProps) => {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={"/shop/blog-1.jpg"}
          width={500}
          height={500}
          alt="blog"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="p-3 flex flex-col flex-1 gap-5">
        <Link href={`/blogs/${slug}`} className=" text-sm font-bold line-clamp-2 break-all">
          {title}
        </Link>
        <div className="flex justify-between mt-auto items-center gap-2 flex-wrap">
          <span className="text-xs font-bold">{author}</span>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRelatedCard;
