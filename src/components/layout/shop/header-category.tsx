import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import React from "react";

type HeaderCategoryProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isHeader?: boolean;
};

const HeaderCategory = ({
  open,
  onOpenChange,
  isHeader,
}: HeaderCategoryProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          asChild
          variant={isHeader ? "outline" : "ghost"}
          className={`${isHeader && "size-[45px] rounded-full bg-surface cursor-pointer border-none shadow-sm lg:hidden"}`}
        >
          <div className={`${!isHeader && "py-8"}`}>
            <LayoutGrid
              
              className={`${isHeader ? "size-[26px]" : "size-[25px]"}`}
            />
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
                className="my-2 rounded-sm px-3 py-3 font-semibold bg-surface border block"
              >
                Laptop
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="my-2 rounded-sm px-3 py-3 font-semibold bg-surface border block"
              >
                Mobile
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="my-2 rounded-sm px-3 py-3 font-semibold bg-surface border block"
              >
                Headphonesd
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="my-2 rounded-sm px-3 py-3 font-semibold bg-surface border block"
              >
                Mouse
              </Link>
            </li>
          </ScrollArea>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderCategory;
