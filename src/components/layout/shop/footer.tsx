import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-surface mt-15">
      <MaxWidthWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-14">
        <div className="flex flex-col justify-between">
          <Link href={"/"}>
            <Image src={"/LogoLight.png"} width={127} height={30} alt="logo" />
          </Link>
          <p className="text-xs text-muted-foreground mt-2">
            Best tech products for your setup.
          </p>
          <div>
            <span className="text-[13px] font-extrabold">Address : </span>
            <span className="text-[13px] text-muted-foreground font-semibold">
              Iran,Esfahan
            </span>
          </div>
          <div className="leading-4">
            <span className="text-[13px] font-extrabold">Phone Number : </span>
            <span className="text-[13px] text-muted-foreground font-semibold">
              09023555444
            </span>
          </div>
          <div className="flex gap-4 mt-3">
            <Link href={"/"}>
              <Image
                src={"/telegram.svg"}
                width={30}
                height={30}
                alt="telegram"
                className="dark:invert"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/instagram.svg"}
                width={30}
                height={30}
                alt="instagram"
                className="dark:invert"
              />
            </Link>
          </div>
        </div>
        <div>
          <ShopTitle title="Quick Links" className="text-sm sm:text-lg" />
          <ul className="text-xs leading-8 mt-2 font-semibold sm:text-sm">
            <li>
              <Link href={"/"}>About Us</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/"}>FAQ</Link>
            </li>
            <li>
              <Link href={"/"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <ShopTitle title="Product Categories" className="text-sm sm:text-lg" />
          <ul className="text-xs leading-8 mt-2 font-semibold sm:text-sm">
            <li>
              <Link href={"/"}>Laptops</Link>
            </li>
            <li>
              <Link href={"/"}>Monitors</Link>
            </li>
            <li>
              <Link href={"/"}>PC Components</Link>
            </li>
            <li>
              <Link href={"/"}>Accessories</Link>
            </li>
          </ul>
        </div>
        <div>
          <ShopTitle title="Customer Services" className="text-sm sm:text-lg" />
          <ul className="text-xs leading-8 mt-2 font-semibold sm:text-sm">
            <li>
              <Link href={"/"}>Customer Support</Link>
            </li>
            <li>
              <Link href={"/"}>Order Tracking</Link>
            </li>
            <li>
              <Link href={"/"}>Shipping Methods</Link>
            </li>
            <li>
              <Link href={"/"}>Returns</Link>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
      <div className="border-t">
        <MaxWidthWrapper className="py-5">
            <p className="text-center font-semibold text-muted-foreground text-sm">© 2026 DashStack. All rights reserved.</p>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Footer;
