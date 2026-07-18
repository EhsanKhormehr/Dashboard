import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePagePromoGridCard = () => {
  return (
    <div className="bg-[#2C2C2C]">
      <div className="py-5 flex justify-end">
        <Image
          src={"/shop/macbook.png"}
          width={360}
          height={390}
          alt="macbook"
        />
      </div>
      <div className="px-8 pb-14">
        <span className="block font-semibold text-3xl text-white">Popular Products</span>
        <span className="block text-muted-foreground my-4 text-sm">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance,  and ease of use.
        </span>
        <Link href={"/"} className="text-white py-3 inline-block mt-2 text-sm px-14 border font-semibold rounded-sm">Shop Now</Link>
      </div>
    </div>
  );
};

export default HomePagePromoGridCard;