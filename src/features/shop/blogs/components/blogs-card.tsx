import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import React from "react";

type BlogsCardProps = {
  title: string;
  description: string;
  userName?: string;
  createdAt: Date;
  slug: string;
  thumbnail: string;
};

const BlogsCard = ({
  title,
  description,
  userName,
  createdAt,
  slug,
  thumbnail,
}: BlogsCardProps) => {
  return (
    <div className="bg-surface shadow-soft-card rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
      <Link href={`/blogs/${slug}`}>
        <div className="block h-auto">
          <Image
            src={thumbnail}
            width={500}
            height={500}
            alt="blog"
            className="block w-full object-cover aspect-video"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/blogs/${slug}`} className="font-extrabold line-clamp-3">
          {title}
        </Link>
        <div className="mt-auto">
          <p className="line-clamp-2  text-xs text-muted-foreground my-2 ">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-1.5">
              <Avatar>
                <AvatarImage src={"/avatar-user.jpg"} />
              </Avatar>
              <span className="text-xs font-bold text-surface-foreground">
                {userName}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CalendarDays className="size-4" />
              <span className="text-xs">
                {formatDistanceToNow(new Date(createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
          <Button asChild className="font-bold">
            <Link href={`/blogs/${slug}`} className="mt-5 w-full h-12">
              Read More
              <ArrowRight className="size-4 stroke-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
