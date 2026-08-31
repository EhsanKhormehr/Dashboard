"use client";
import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sanitize } from "isomorphic-dompurify";
import { PenTool } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import React, { useState } from "react";

type ProductExpertReviewProps = {
  content: string;
};

const ProductExpertReview = ({ content }: ProductExpertReviewProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const sanitizeContent = DOMPurify.sanitize(content);
  return (
    <div
      className="mt-5 bg-surface shadow-soft-card rounded-xl p-5 col-span-12 lg:col-span-9"
      id="expert-review"
    >
      <div className="flex items-center">
        <PenTool className="text-primary size-[25px]" />
        <ShopTitle
          title="Expert Review"
          isShape={false}
          className="ml-2 font-black"
        />
      </div>
      <div
        className={cn(
          "overflow-hidden relative mt-5 transition-all duration-300 ease-in-out",
          expanded ? "max-h-[4500px] lg:max-h-[2500px]" : "max-h-[320px]",
        )}
      >
        <div
          className={cn(
            "absolute bottom-10 left-0 right-0 h-35 bg-gradient-to-t from-surface via-surface/90 to-transparent",
            expanded ? "hidden" : "block",
          )}
        />

        <div className="flex justify-center">
          <Button
            className="absolute -bottom-1 rounded-none -left-1 w-full cursor-pointer py-6 bg-surface hover:!bg-surface text-primary font-black hover:text-primary"
            variant={"ghost"}
            onClick={() => {
              setExpanded((prev) => !prev);
            }}
          >
            {expanded ? "View Less" : "View More"}
          </Button>
        </div>
        <div
          className="mb-15 tiptap"
          dangerouslySetInnerHTML={{ __html: sanitizeContent }}
        />
      </div>
    </div>
  );
};

export default ProductExpertReview;
