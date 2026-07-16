import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import BannerInfoBox from "./banner-info-box";
import { cn } from "@/lib/utils";
import Image from "next/image";

const items = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const HomePageBanner = () => {
  return (
    <div>
      <MaxWidthWrapper className="my-5 md:my-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="font-[1000] text-[36px] md:text-[64px] leading-9 md:leading-15">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h3>
            <span className="text-dashboard-text/60 my-5 md:my-8 block">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
            <Button asChild className=" w-full md:w-fit rounded-4xl py-6 px-14">
              <Link href="/">Shop Now</Link>
            </Button>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 ">
              {items.map((item, index) => (
                <BannerInfoBox
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  className={cn(
                    index === 1 && "md:border-x-2 border-l-2 text-center",
                    index === 2 && "md:text-right col-span-2 md:col-span-1  text-center",
                  )}
                />
              ))}
            </div>
          </div>
          <div className="justify-self-end">
            <Image src={"/banner.png"} width={600} height={600} alt="banner" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePageBanner;
