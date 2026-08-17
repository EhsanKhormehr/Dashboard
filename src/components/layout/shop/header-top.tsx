"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LayoutGrid, Moon, ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderCategory from "./header-category";
import HeaderForm from "./header-form";
import { useMeQuery } from "@/features/auth/me/services/useQueries";

const HeaderTop = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useMeQuery();
  const user = data?.user;
  
  return (
    <div className="px-2 md:px-4 xl:px-14 py-4 flex items-center justify-between border-b bg-surface">
      <div className="lg:hidden">
        <HeaderCategory open={open} onOpenChange={setOpen} isHeader={true} />
      </div>
      <div className="flex items-center justify-between">
        <Image src={"/LogoLight.png"} width={127} height={30} alt="logo" />
        <HeaderForm />
      </div>
      <div className="flex items-center">
        <Button
          variant={"outline"}
          asChild
          className="bg-surface hover:bg-primary hover:text-primary-foreground rounded-full size-[45px] hover:dark:bg-primary hover:dark:text-primary-foreground hover:border-none hidden lg:flex"
        >
          <Link href={"/cart"}>
            <ShoppingBag className="size-[26px]" />
          </Link>
        </Button>
        <div className="flex items-center">
          <Button
            variant={"outline"}
            asChild
            className="size-[45px] rounded-full bg-surface cursor-pointer border-none shadow-sm lg:hidden"
          >
            <Moon className="size-[26px]" />
          </Button>
          <Link
            href={user ? "/account" : "/login"}
            className="flex items-center bg-primary ml-3 size-[45px] lg:w-auto lg:h-[45px] px-3 rounded-full lg:rounded-3xl text-white hover:bg-primary/90 transition-colors"
          >
            <UserRound />
            <span className="text-sm font-semibold hidden lg:flex">
              {user ? data?.user?.userName : "Login/Register"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
