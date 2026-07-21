import { cn } from "@/lib/utils";
import React from "react";

type ShopTitleProps = {
  title: string;
  className? : string
};

const ShopTitle = ({ title , className }: ShopTitleProps) => {
  return <span className={cn("text-xl font-bold block" , className)}>{title}</span>;
};

export default ShopTitle;
