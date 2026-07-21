import { Progress } from "@/components/ui/progress";
import React from "react";

const ProductProgressRating = () => {
  return (
    <div className="flex items-center my-3">
      <span className="font-bold">Excellent</span>
      <Progress value={57} className="mr-4 ml-10 h-[6px] [&>div]:bg-rating" />
      <span className="text-muted-foreground font-semibold text-sm">57</span>
    </div>
  );
};

export default ProductProgressRating;
