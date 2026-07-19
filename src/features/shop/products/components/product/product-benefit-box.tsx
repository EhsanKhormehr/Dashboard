import { Truck } from "lucide-react";
import React from "react";

const ProductBenefitBox = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row ">
      <div className="size-14 bg-muted text-muted-foreground rounded-xl flex items-center justify-center">
        <Truck />
      </div>
      <div className="flex flex-col items-center lg:ml-4 mt-4 lg:mt-0 text-center">
        <span className="text-muted-foreground font-semibold">Free Delivary</span>
        <span className="font-semibold">1-2 day</span>
      </div>
    </div>
  );
};

export default ProductBenefitBox;
