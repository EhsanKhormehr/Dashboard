import { LucideIcon } from "lucide-react";
import React from "react";

export type AccountStatsBoxVariant = "purple" | "yellow" | "green" | "orange";

export type AccountStatsBoxProps = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  variant: AccountStatsBoxVariant;
};

const boxVariantStyles = {
  purple: "bg-[#8280FF] text-white",
  yellow: "bg-[#FEC53D] text-white",
  green: "bg-[#4AD991] text-white",
  orange: "bg-[#FF9066] text-white",
};

const AccountStatsBox = ({
  title,
  value,
  icon: Icon,
  variant,
  description,
}: AccountStatsBoxProps) => {
  return (
    <div className="bg-surface shadow-card rounded-2xl p-4">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col ">
          <span className="text-muted-foreground font-semibold mb-4">{title}</span>
          <span className="font-bold text-[25px]">{value}</span>
        </div>
        <div className={`p-4 rounded-3xl ${boxVariantStyles[variant]}`}>
          <Icon size={28} />
        </div>
      </div>
      <span className="text-sm text-dashboard-text mt-4 block">{description}</span>
    </div>
  );
};

export default AccountStatsBox;
