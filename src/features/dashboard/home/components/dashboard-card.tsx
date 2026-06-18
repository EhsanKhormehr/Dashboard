import { TrendingDown, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from "react";

type DashboardCardVariant = "purple" | "yellow" | "green" | "orange";
type TrendIcon = "up" | "down";

type DashboardCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
  variant: DashboardCardVariant;
  trendIcon: TrendIcon;
  trendValue: string;
  trendLabel: string;
};

const variantStyles: Record<DashboardCardVariant, string> = {
  purple: "bg-[#8280FF] text-white",
  yellow: "bg-[#FEC53D] text-white",
  green: "bg-[#4AD991] text-white",
  orange: "bg-[#FF9066] text-white",
};

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  variant,
  trendIcon,
  trendValue,
  trendLabel,
}: DashboardCardProps) {
  return (
    <div className="shadow-card bg-surface rounded-2xl p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold text-dashboard-text">{title}</span>
          <span className="font-bold text-3xl mt-3.5">{value}</span>
        </div>
        <div className={`${variantStyles[variant]} text-white size-15 rounded-3xl flex items-center justify-center`}>
          <Icon className="size-7" />
        </div>
      </div>
      <div className="flex mt-7">
        {trendIcon === "up" ? (
          <TrendingUp className="text-green-700" />
        ) : (
          <TrendingDown className="text-red-700" />
        )}

        <span className="text-green-700 font-semibold mx-2">{trendValue}</span>
        <span className="font-semibold">{trendLabel}</span>
      </div>
    </div>
  );
}
