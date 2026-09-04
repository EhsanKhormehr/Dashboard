import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePromoBanners = () => {
  return (
    <MaxWidthWrapper className="mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Link href={"/"} className="rounded-2xl ">
          <Image
            className="h-auto w-full rounded-2xl aspect-[5/2]"
            src={"/promo-1.png"}
            width={750}
            height={300}
            alt="banner"
          />
        </Link>
        <Link href={"/"} className="rounded-2xl ">
          <Image
            className="h-auto w-full rounded-2xl aspect-[5/2]"
            src={"/promo-2.png"}
            width={750}
            height={300}
            alt="banner"
          />
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default HomePromoBanners;
