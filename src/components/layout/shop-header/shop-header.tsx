"use client";
import React from "react";
import MaxWidthWrapper from "../../common/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";

import ShopMenuDesktop from "./shop-menu-desktop";
import { useGetMenus } from "@/features/dashboard/menu/services/useQueries";
import ShopMenuMobile from "./shop-menu-mobile";

const ShopHeader = () => {
  const { data = [] } = useGetMenus();

  return (
    <div className="bg-surface py-7 border-b">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center ">
          <Image src={"/LogoLight.png"} width={96} height={32} alt="logo" />
          <ShopMenuDesktop data={data} />
        </div>
        <div className="flex items-center">
          <ul className="flex items-center *:ml-4">
            <li>
              <Link href={"/favorites"}>
                <Heart strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link href={"/cart"}>
                <ShoppingCart strokeWidth={1.5} />
              </Link>
            </li>
            <li className="mr-10 md:mr-0">
              <Link href={"/profile"}>
                <User strokeWidth={1.5} />
              </Link>
            </li>
            <li className="md:hidden">
              <ShopMenuMobile data={data} />
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ShopHeader;
