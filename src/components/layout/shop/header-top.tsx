import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderTop = () => {
  return (
    <div className="px-2 md:px-4 xl:px-14 py-4 flex items-center justify-between shadow-sm bg-surface">
      <div className="flex items-center justify-between">
        <Image src={"/LogoLight.png"} width={127} height={30} alt="logo" />
        <form className=" hidden lg:flex">
          <Input
            placeholder="Search,something like laptop"
            className="rounded-full bg-surface w-xl xl:w-3xl py-5"
          />
        </form>
      </div>
      <div className="flex items-center">
        <Button
          variant={"outline"}
          asChild
          className="bg-surface hover:bg-primary hover:text-primary-foreground rounded-full size-[45px] hover:dark:bg-primary hover:dark:text-primary-foreground hover:border-none"
        >
          <Link href={"/"}>
            <ShoppingBag className="size-[26px]" strokeWidth={1.3} />
          </Link>
        </Button>
        <div>
          <Link
            href={"/"}
            className="flex items-center bg-primary ml-3 h-[45px] px-3 rounded-3xl text-white hover:bg-primary/90 transition-colors"
          >
            <UserRound strokeWidth={1.3} />
            <span className="text-sm font-semibold ">Ehsan Khormehr</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
