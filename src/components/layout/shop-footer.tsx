import React from "react";
import MaxWidthWrapper from "../common/max-width-wrapper";
import Link from "next/link";
import Image from "next/image";

const ShopFooter = () => {
  return (
    <div className="py-28 bg-black">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-20">
          <div >
            <Link className="flex justify-center md:justify-start"  href={"/"}>
              <Image src={"/LogoDark.png"} width={96} height={32} alt="logo" />
            </Link>
            <span className="text-sm text-white mt-6 block">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</span>
            
          </div>
          <div className="">
            <span className="font-bold text-white">Services</span>
            <ul className="text-muted-foreground leading-8">
                <li>
                    <Link href={"/"}>Bonus</Link>
                </li>
                <li>
                    <Link href={"/"}>Gift Card</Link>
                </li>
                <li>
                    <Link href={"/"}>Credit and payment</Link>
                </li>
                <li>
                    <Link href={"/"}>Service contracts</Link>
                </li>
            </ul>
          </div>
          <div className="">
            <span className="font-bold text-white">Services</span>

             <ul className="text-muted-foreground leading-8">
                <li>
                    <Link href={"/"}>Bonus</Link>
                </li>
                <li>
                    <Link href={"/"}>Gift Card</Link>
                </li>
                <li>
                    <Link href={"/"}>Credit and payment</Link>
                </li>
                <li>
                    <Link href={"/"}>Service contracts</Link>
                </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ShopFooter;
