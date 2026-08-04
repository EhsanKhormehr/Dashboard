import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  House,
  LayoutGrid,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div className="fixed left-0 right-0 bg-white/60 backdrop-blur-[4px] shadow-card bottom-4 mx-2 md:mx-4  rounded-full lg:hidden">
      <div className="grid grid-cols-5">
        <Button asChild variant={"ghost"}>
          <Link href={"/"} className="py-8">
            <House strokeWidth={1.3} className="size-[25px]" />
          </Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button asChild variant={"ghost"} className="cursor-pointer">
              <div className="py-8">
                <LayoutGrid strokeWidth={1.3} className="size-[25px]" />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-3xl mx-4 shadow-card !h-[72vh] bg-surface/90"
          >
            <SheetHeader className="border-b border-black/20">
              <SheetTitle className="font-bold">Category</SheetTitle>
            </SheetHeader>
            <ul>
              <ScrollArea className="h-[61vh] px-4">

                <li>
                  <Link
                    href={"/"}
                    className="my-2 rounded-sm px-3 py-3 font-semibold bg-white block shadow-sm"
                  >
                    Laptop
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="my-2 rounded-sm px-3 py-3 font-semibold bg-white block shadow-sm"
                  >
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="my-2 rounded-sm px-3 py-3 font-semibold bg-white block shadow-sm"
                  >
                    Headphonesd
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="my-2 rounded-sm px-3 py-3 font-semibold bg-white block shadow-sm"
                  >
                    Mouse
                  </Link>
                </li>
              </ScrollArea>
            </ul>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button asChild variant={"ghost"} className="cursor-pointer">
              <div className="py-8">
                <Search strokeWidth={1.3} className="size-[25px]" />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-3xl mx-4 shadow-card !h-[72vh] bg-surface/90"
          >
            <SheetHeader className="border-b border-black/20">
              <SheetTitle className="font-bold">Search</SheetTitle>
            </SheetHeader>
            <form className="mx-4">
              <Input
                placeholder="Search..."
                type="text"
                className="bg-background rounded-2xl py-6"
              />
              <div className="flex justify-center">
                <Button type="submit" className="mt-4 w-[80%] rounded-2xl py-6">
                  Search
                </Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>

        <Button asChild variant={"ghost"}>
          <Link href={"/profile"} className="py-8">
            <UserRound strokeWidth={1.3} className="size-[25px]" />
          </Link>
        </Button>
        <Button asChild variant={"ghost"}>
          <Link href={"/cart"} className="py-8">
            <ShoppingBag strokeWidth={1.3} className="size-[25px]" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
