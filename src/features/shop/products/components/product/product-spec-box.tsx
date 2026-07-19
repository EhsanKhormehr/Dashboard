import { Smartphone } from "lucide-react";
import React from "react";

const ProductSpecBox = () => {
  return (
    <div className="bg-chart-1/40 rounded-sm p-4 flex items-center">
      <div>
        <Smartphone size={27} />
      </div>
      <div className="flex flex-col ml-2">
        <span className="text-muted-foreground/70 font-semibold">
          Screen Size
        </span>
        <span className="font-bold">6.7"</span>
      </div>
    </div>
  );
};

export default ProductSpecBox;
