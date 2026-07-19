import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductBenefitBox from "@/features/shop/products/components/product/product-benefit-box";
import ProductInfoBox from "@/features/shop/products/components/product/product-spec-box";
import ProductVariantColor from "@/features/shop/products/components/product/product-variant-color";
import ProductVariantSelector from "@/features/shop/products/components/product/productVariantSelector";

const ProductWrapper = () => {
  return (
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
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
          work without rechargingthroughout the day. Incredible photosas in
          weak, yesand in bright lightusing the new systemwith two cameras
          more...
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
  );
};

export default ProductWrapper;
