"use client";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import { ChevronDown, Star } from "lucide-react";
import React, { useState } from "react";
import ProductProgressRating from "./product-progress-rating";
import { Input } from "@/components/ui/input";
import ProductCommentBox from "./product-comment-box";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const ProductComments = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <MaxWidthWrapper className="my-20">
        <ShopTitle title="Reviews" className="mb-10" />
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-3 bg-background flex items-center justify-center rounded-xl p-8 md:flex-col">
            <div className="text-center">
              <span className="text-5xl font-bold block">4.8</span>
              <span className="text-muted-foreground font-semibold text-sm md:my-2 md:block">
                of 125 reviews
              </span>
            </div>
            <div className="flex ml-8 md:ml-0">
              <Star className="fill-rating text-rating cursor-pointer" />
              <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
              <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
              <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
              <Star className="ml-[1px]  text-rating cursor-pointer" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 my-14 md:ml-14">
            <ProductProgressRating />
            <ProductProgressRating />
          </div>
        </div>
        <form className="md:mt-10">
          <Input placeholder="Leave Comment" className="py-7" />
        </form>
        <div className="my-8 relative">
          <div
            className={`${isOpen ? "hidden" : "block"} absolute bottom-32 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-4`}
          ></div>
          <ProductCommentBox />
          <ProductCommentBox />
          <ProductCommentBox />
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleContent>
              <ProductCommentBox />
            </CollapsibleContent>
            <div className="flex justify-center">
              <CollapsibleTrigger asChild>
                <Button
                  variant={"outline"}
                  className="bg-white border-black w-[200px] h-12 my-8 cursor-pointer z-30"
                >
                  View More
                  {isOpen ? (
                    <ChevronDown className="rotate-180 size-5" />
                  ) : (
                    <ChevronDown className=" size-5" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductComments;
