import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LucideBadgeCheck } from "lucide-react";
import React from "react";

const ReviewAnswer = () => {
  return (
    <div className="border mt-5 p-4 rounded-xl bg-background">
      <div className="flex justify-between items-center border-b py-3 flex-wrap gap-2">
        <div className="flex items-center">
          <Avatar className="size-[40px]">
            <AvatarImage src={"/avatar-user.jpg"} />
          </Avatar>
          <div className="flex flex-col ml-2 gap-2">
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-sm font-bold">Shop</span>
              <LucideBadgeCheck className="size-5 fill-primary stroke-white dark:stroke-background" />
            </div>
            <span className="text-xs text-muted-foreground font-semibold">
              2026/12/23
            </span>
          </div>
        </div>
      </div>
      <p className="py-3 text-sm leading-6">Thanks a lot :)</p>
    </div>
  );
};

export default ReviewAnswer;
