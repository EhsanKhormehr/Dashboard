"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductBenefitBox from "@/features/shop/products/components/product/product-benefit-box";
import ProductInfoBox from "@/features/shop/products/components/product/product-spec-box";
import ProductVariantColor from "@/features/shop/products/components/product/product-variant-color";
import ProductVariantSelector from "@/features/shop/products/components/product/productVariantSelector";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProductWrapper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <MaxWidthWrapper>
        <div className="my-28 grid grid-cols-12 items-center md:gap-12">
          <div className="col-span-12 order-2 md:order-1 md:col-span-2 flex justify-between my-6 md:my-0 md:flex-col">
            <Image
              src={"/shop/iphone-14.png"}
              width={74}
              height={93}
              alt="iphone"
              className="my-4"
            />
            <Image
              src={"/shop/iphone-14.png"}
              width={74}
              height={93}
              alt="iphone"
              className="my-4 opacity-40"
            />
            <Image
              src={"/shop/iphone-14.png"}
              width={74}
              height={93}
              alt="iphone"
              className="my-4 opacity-40"
            />
            <Image
              src={"/shop/iphone-14.png"}
              width={74}
              height={93}
              alt="iphone"
              className="my-4 opacity-40"
            />
          </div>

          <div className="col-span-12 order-1 md:order-2 md:col-span-4">
            <Image
              src={"/shop/iphone-14.png"}
              width={413}
              height={516}
              alt="iphone"
            />
          </div>

          <div className="col-span-12 order-3 md:order-3 md:col-span-6">
            <h2 className="text-[40px] font-black">Apple iPhone 14 Pro Max</h2>
            <div className="flex items-center mt-6 mb-4">
              <span className="text-[32px] font-bold">$1399</span>
              <span className="line-through text-2xl text-muted-foreground ml-5">
                $1499
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-[600]">Select color: </span>
              <div className="flex ml-6 *:mr-2">
                <ProductVariantColor />
                <ProductVariantColor />
                <ProductVariantColor />
                <ProductVariantColor />
              </div>
            </div>
            <div className="my-6 grid grid-cols-4 lg:flex">
              <ProductVariantSelector />
              <ProductVariantSelector />
              <ProductVariantSelector />
              <Button
                variant={"outline"}
                className="bg-white max-w-24 lg:w-24  h-12 cursor-pointer mr-4 text-base font-[600] border-black"
              >
                1TB
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductInfoBox />
              <ProductInfoBox />
              <ProductInfoBox />
              <ProductInfoBox />
              <ProductInfoBox />
              <ProductInfoBox />
            </div>
            <span className="text-sm text-muted-foreground mt-6 block">
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras more...
            </span>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant={"outline"}
                className="bg-white border-black h-14 cursor-pointer"
              >
                Add To Wishlist
              </Button>
              <Button className="bg-black hover:bg-black/80 h-14 cursor-pointer">
                Add To Card
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <ProductBenefitBox />
              <ProductBenefitBox />
              <ProductBenefitBox />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="bg-background py-20">
        <MaxWidthWrapper className="py-12 px-10 bg-white">
          <ShopTitle title="Details" />
          <p className="text-sm text-muted-foreground my-8">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
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
    </div>
  );
};

export default ProductWrapper;
