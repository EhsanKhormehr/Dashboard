import React from "react";
import MaxWidthWrapper from "../../common/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import { CircleUserRound, ShoppingCart } from "lucide-react";

import ShopMobileMenu from "./shop-mobile-menu";
import ShopDesktopNav from "./shop-desktop-nav";

import ShopHeaderForm from "./shop-header-form";
import ShopHeaderSearchMobile from "./shop-header-search-mobile";

const ShopHeader = () => {
  return (
    <>
      <div className="py-8 bg-surface">
        <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex items-center">
            <ShopMobileMenu />
            <Image
              src={"/LogoLight.png"}
              width={130}
              height={30}
              alt="logo"
              className="ml-2 md:m-0"
            />
          </div>
          <ShopDesktopNav />
          <ShopHeaderForm />

          <ul className="flex items-center">
            <li className="md:hidden">
              <ShopHeaderSearchMobile />
            </li>
            <li className="mx-4">
              <Link href={"/cart"}>
                <ShoppingCart />
              </Link>
            </li>
            <li>
              <Link href={"/profile"}>
                <CircleUserRound />
              </Link>
            </li>
          </ul>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default ShopHeader;
