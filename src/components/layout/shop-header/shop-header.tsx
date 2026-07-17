import React from "react";
import MaxWidthWrapper from "../../common/max-width-wrapper";
import Image from "next/image";
import ShopHeaderForm from "./shop-header-form";
import Link from "next/link";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const ShopHeader = () => {
  return (
    <div className="bg-surface py-7">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center ">
          <Image src={"/LogoLight.png"} width={96} height={32} alt="logo" />
          <ul className=" items-center *:ml-10 hidden md:flex">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>
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
              <Sheet>
                <SheetTrigger asChild>
                  <Menu className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetTitle></SheetTitle>
                  <ul className="mt-10 px-6">
                    <li>
                      <Button variant={"ghost"}  asChild>
                        <Link  className="py-6 w-full flex justify-start" href={"/"}>
                          Home
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"ghost"}  asChild>
                        <Link  className="py-6 w-full flex justify-start" href={"/"}>
                          About
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"ghost"}  asChild>
                        <Link  className="py-6 w-full flex justify-start" href={"/"}>
                          Contact Us
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"ghost"}  asChild>
                        <Link  className="py-6 w-full flex justify-start" href={"/"}>
                          Blog
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </SheetContent>
              </Sheet>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ShopHeader;
