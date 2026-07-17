import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopBanner = () => {
  return (
    <div className="bg-[#211C24] text-surface pt-20">
      <MaxWidthWrapper className="grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-8 text-center md:text-left">
          <span className="text-soft font-semibold text-xl">Pro.Beyond.</span>
          <h3 className="text-7xl md:text-8xl my-3">
            IPhone 14 <span className="font-[1000]">Pro</span>
          </h3>
          <span className="text-soft text-[18px] font-semibold block mt-3 mb-10">
            Created to change everything for the better. For everyone
          </span>
          <Link href={"/"} className="border-2 border-surface rounded-sm py-3 px-15 ">
            Shop Now
          </Link>
        </div>
        <div className="flex justify-center md:justify-end col-span-12 md:col-span-4 mt-20">
          <Image
            src={"/shop/iphone-image.png"}
            width={410}
            height={700}
            alt="iphone"
            className="h-auto max-w-[280px] md:w-[410px]"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ShopBanner;
