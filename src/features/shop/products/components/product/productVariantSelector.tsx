import { Button } from "@/components/ui/button";
import React from "react";

const ProductVariantSelector = () => {
  return (
    <div>
      <Button
        variant={"outline"}
        className="bg-white max-w-24 lg:w-24  h-12 cursor-pointer mr-4 text-base font-[600] opacity-70"
      >
        128GB
      </Button>
    </div>
  );
};

export default ProductVariantSelector;
