import {
  Cpu,
  Fan,
  HardDrive,
  MemoryStick,
  Monitor,
  MonitorCog,
  Star,
} from "lucide-react";
import React from "react";
import ProductInfoPanelBox from "./product-info-panel-box";

const productSpecs = [
  {
    label: "CPU",
    value: "Intel Core i7-13650HX",
    icon: Cpu,
  },
  {
    label: "GPU",
    value: "NVIDIA RTX 4060 8GB",
    icon: MonitorCog,
  },
  {
    label: "RAM",
    value: "16GB DDR5",
    icon: MemoryStick,
  },
  {
    label: "Storage",
    value: "1TB NVMe SSD",
    icon: HardDrive,
  },
  {
    label: "Display",
    value: '16" FHD+ 165Hz',
    icon: Monitor,
  },
  {
    label: "Cooling",
    value: "ROG Intelligent Cooling",
    icon: Fan,
  },
];

const ProductInfoPanel = () => {
  return (
    <div className="col-span-12 xl:col-span-6 bg-surface rounded-2xl relative shadow-soft-card p-5">
      <span className="block text-xs text-muted-foreground font-medium">
        ASUS ROG
      </span>
      <h1 className="text-2xl font-black">ROG Strix G16 Gaming Laptop</h1>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="fill-rating stroke-rating" />
          <Star className="fill-rating stroke-rating" />
          <Star className="fill-rating stroke-rating" />
          <Star className="fill-rating stroke-rating" />
          <Star className="stroke-muted-foreground/20 fill-muted-foreground/20" />
        </div>
        <span className="text-sm text-muted-foreground font-semibold">
          (124 Reviews)
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-5">
        {productSpecs.map((spec) => (
          <ProductInfoPanelBox
            key={spec.label}
            icon={spec.icon}
            label={spec.label}
            value={spec.value}
          />
        ))}
      </div>
      <p className="mt-5 text-sm text-muted-foreground font-medium">
        Built for smooth gaming and heavy multitasking, this laptop combines
        powerful performance, fast storage, and advanced cooling in a sleek ROG
        design.
      </p>
      <div className="flex items-center mt-5 gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        <span>
          SKU: <span className="text-surface-foreground">ROG-G16-2024-BL</span>
        </span>
        <span className="w-px h-3 bg-surface-foreground/10"></span>
        <span>
          Category: <span className="text-surface-foreground">Gaming Laptops</span>
        </span>
      </div>
    </div>
  );
};

export default ProductInfoPanel;
