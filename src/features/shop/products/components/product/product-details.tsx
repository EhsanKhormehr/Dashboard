"use client";

import React, { useState } from "react";
import ShopTitle from "@/components/common/shop-title";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-background py-20">
      <MaxWidthWrapper className="py-12 px-10 bg-white">
        <ShopTitle title="Details" />
        <p className="text-sm text-muted-foreground my-8">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>
        <div className="mb-10">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="my-10">
              <span className="font-bold text-[18px]">Screen</span>
              <div className="mt-4">
                <div className="flex justify-between py-3 border-b">
                  <span>Screen Type</span>
                  <span>OLED</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span>Screen Type</span>
                  <span>OLED</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span>Screen Type</span>
                  <span>OLED</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span>Screen Type</span>
                  <span>OLED</span>
                </div>
              </div>
            </div>

            <CollapsibleContent>
              <div className="my-10">
                <span className="font-bold text-[18px]">Screen</span>
                <div className="mt-4">
                  <div className="flex justify-between py-3 border-b">
                    <span>Screen Type</span>
                    <span>OLED</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span>Screen Type</span>
                    <span>OLED</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span>Screen Type</span>
                    <span>OLED</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span>Screen Type</span>
                    <span>OLED</span>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
            <div className="flex justify-center">
              <CollapsibleTrigger asChild>
                <Button
                  variant={"outline"}
                  className="bg-white border-black w-[200px] h-12 my-8 cursor-pointer"
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

export default ProductDetails;
