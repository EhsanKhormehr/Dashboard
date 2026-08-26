import React from "react";
import { Star } from "lucide-react";
import ReviewBox from "./review-box";

const ReviewsWrapper = () => {
  return (
    <div className="mt-10">
      <div className="border-b flex items-center justify-between">
        <div className="py-2">
          <span className="text-base font-bold text-surface-foreground">Reviews</span>
          <span className="text-muted-foreground text-xs ml-1">(110)</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-yellow-400/50 dark:border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-rating">
          <Star className="size-3.5 fill-rating stroke-rating" />
          4.8 average
        </div>
      </div>
      <div>
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
      </div>
    </div>
  );
};

export default ReviewsWrapper;
