"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import React from "react";
import CommentsAnswer from "./comments-answer";
import { useCommentsContext } from "./comments-context";

const CommentsBox = () => {
  const { type } = useCommentsContext();

  return (
    <div className="shadow-soft-card border mt-5 p-5 rounded-xl">
      <div className="flex justify-between items-center border-b py-3 flex-wrap gap-2">
        <div className="flex items-center">
          <Avatar className="size-[40px]">
            <AvatarImage src={"/avatar-user.jpg"} />
          </Avatar>
          <div className="flex flex-col ml-2 gap-2">
            <div className="flex gap-2 flex-wrap">
              <span className="text-sm font-bold">Ehsan Khormehr</span>
              {type === "product" && (
                <Badge className="text-xs">Verified Purchase</Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground font-semibold">
              2026/12/23
            </span>
          </div>
        </div>
        {type === "product" && (
          <div>
            <div className="flex gap-1">
              <Star className=" size-5 cursor-pointer fill-rating stroke-rating" />
              <Star className=" size-5 cursor-pointer fill-rating stroke-rating" />
              <Star className=" size-5 cursor-pointer fill-rating stroke-rating" />
              <Star className=" size-5 cursor-pointer fill-rating stroke-rating" />
              <Star className=" size-5 cursor-pointer fill-rating stroke-rating" />
            </div>
          </div>
        )}
      </div>
      <p className="py-3 text-sm leading-6">
        I’ve been using this product for a little while now, and overall I’m
        really satisfied with the experience. The build quality feels solid, the
        design looks clean, and it performs well in everyday use. Setup was
        straightforward, and everything worked as expected right out of the box.
        What stood out to me most was how reliable and comfortable it feels
        during longer sessions. The only small downside is that a few details
        could be refined a bit more, but nothing major enough to affect the
        overall experience. Considering the price and what it offers, I think
        it’s a very good choice and I would definitely recommend it to anyone
        looking for something dependable and well-made.
      </p>
      <CommentsAnswer />
    </div>
  );
};

export default CommentsBox;
