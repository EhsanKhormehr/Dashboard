"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import React from "react";
import CommentsAnswer from "./comments-answer";
import { useCommentsContext } from "./comments-context";
import { formatDistanceToNow } from "date-fns";

type CommentsBoxProps = {
  userName: string | undefined;
  createdAt: Date;
  content: string;
};

const CommentsBox = ({ userName, createdAt, content }: CommentsBoxProps) => {
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
              <span className="text-sm font-bold">{userName}</span>
              {type === "product" && (
                <Badge className="text-xs">Verified Purchase</Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground font-semibold">
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              })}
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
        {content}
      </p>
      {/* <CommentsAnswer /> */}
    </div>
  );
};

export default CommentsBox;
