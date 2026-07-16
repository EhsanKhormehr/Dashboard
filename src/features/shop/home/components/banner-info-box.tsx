import { cn } from "@/lib/utils";
import React from "react";

type BannerInfoBoxProps = {
  value: string;
  label: string;
  className? : string
};

const BannerInfoBox = ({ value, label , className }: BannerInfoBoxProps) => {
  return (
    <div className={cn("flex flex-col" , className)}>
      <span className="font-extrabold text-[30px]">{value}</span>
      <span className="text-dashboard-text/60">{label}</span>
    </div>
  );
};

export default BannerInfoBox;
