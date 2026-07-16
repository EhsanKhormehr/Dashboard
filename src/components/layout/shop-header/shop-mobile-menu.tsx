import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { ChevronDownIcon, Menu } from "lucide-react";
import Link from "next/link";
import { shopMenuItems } from "./data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const ShopMobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetHeader className="hidden">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <SheetContent side="left" className="pt-15 px-5">
          {shopMenuItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            if (!hasChildren) {
              return <Link href={item.href ?? "#"} key={item.id}>{item.title}</Link>;
            }

            {
              return (
                <Collapsible key={item.id}>
                  <CollapsibleTrigger
                    className=" w-full [&[data-state=open]>svg]:rotate-180 flex items-center justify-between  p-2 rounded-sm"
                  >
                    {item.title}
                    <ChevronDownIcon className="transition-transform duration-200" strokeWidth={2} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="transition mx-5 border-l-2 pl-3">
                    {item.children?.map((child) => (
                      <Link href={child.href} className="block py-2" key={child.id}>
                        {child.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            }
          })}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShopMobileMenu;
