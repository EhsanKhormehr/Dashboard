import { cn } from "@/lib/utils";
import React from "react";

type ShopTitleProps = {
  title: string;
  className?: string;
  isShape?: boolean;
};

const ShopTitle = ({ title, className, isShape = true }: ShopTitleProps) => {
  return (
    <span
      className={cn(
        `text-xl font-bold block relative ${isShape && "before:absolute before:w-[14px] before:rounded-md before:h-[5px] before:bg-primary before:content-[''] before:top-1/2 before:-translate-y-1/2 before:left-0 pl-5"}`,
        className,
      )}
    >
      {title}
    </span>
  );
};

export default ShopTitle;
