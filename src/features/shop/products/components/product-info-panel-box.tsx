import { Cpu, LucideIcon } from "lucide-react";
import React from "react";

type ProductInfoPanelBoxProps = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const ProductInfoPanelBox = ({
  label,
  value,
  icon: Icon,
}: ProductInfoPanelBoxProps) => {
  return (
    <div className="px-4 py-3 shadow-soft-card bg-background rounded-lg">
      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <Icon className="text-primary size-4" />
        <span>{label}</span>
      </div>
      <p className="text-sm font-semibold text-surface-foreground">{value}</p>
    </div>
  );
};

export default ProductInfoPanelBox;
