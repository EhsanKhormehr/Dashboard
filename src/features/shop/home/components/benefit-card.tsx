import { LucideIcon } from "lucide-react";
import React from "react";

const boxVariantStyles = {
  purple: "bg-[#8280FF] text-white",
  yellow: "bg-[#FEC53D] text-white",
  green: "bg-[#4AD991] text-white",
  orange: "bg-[#FF9066] text-white",
};

export type BenefitCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: "purple" | "yellow" | "green" | "orange";
};

const BenefitCard = ({
  title,
  description,
  icon: Icon,
  variant,
}: BenefitCardProps) => {
  return (
    <div className="rounded-2xl p-4 bg-surface flex items-center justify-between shadow-card gap-6">
      <div>
        <span className="font-bold text-base leading-6">{title}</span>
        <p className="text-[13px] text-muted-foreground font-semibold">
          {description}
        </p>
      </div>
      <div className={`${boxVariantStyles[variant]} p-2 rounded-md`}>
        <Icon className="size-[35px]" />
      </div>
    </div>
  );
};

export default BenefitCard;
