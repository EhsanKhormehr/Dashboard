import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsCard = () => {
  return (
    <div className="bg-surface shadow-soft-card rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <Link href={"/"}>
        <Image
          src={"/shop/blog-2.jpg"}
          width={300}
          height={150}
          alt="blog"
          className="w-full h-auto object-contain rounded-xl"
        />
      </Link>
      <div className="p-4">
        <Link href={"/"} className="font-extrabold">
          How to Choose the Best Gaming Keyboard in 2026
        </Link>
        <p className="line-clamp-2  text-xs text-muted-foreground my-2 ">
          Discover the latest insights, practical tips, and helpful resources to
          improve your skills and stay up to date.
        </p>
        <div className="mt-10 flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-1.5">
            <Avatar>
                <AvatarImage src={"/avatar-user.jpg"} />
            </Avatar>
            <span className="text-sm font-bold text-surface-foreground">
              Ehsan Khormehr
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground">
            <CalendarDays className="size-4" />
            <span className="text-xs">2 Days Ago</span>
          </div>
        </div>
        <Button asChild className="font-bold">
          <Link href={"/"} className="mt-5 w-full h-12">
            Read More
            <ArrowRight className="size-4 stroke-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogsCard;
