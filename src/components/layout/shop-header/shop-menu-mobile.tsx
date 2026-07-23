import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { Menu as MenuType } from "@/types/menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type ShopMenuMobileProps = {
  data: MenuType[];
};

const ShopMenuMobile = ({ data }: ShopMenuMobileProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="mt-12">
          <SheetTitle></SheetTitle>
          {data.map((menuItem) => {
            if (menuItem.subMenus.length === 0) {
              return (
                <Link
                  key={menuItem.id}
                  href={menuItem.href}
                  className="block w-full py-3 hover:bg-muted-foreground/10 px-4 font-bold"
                >
                  {menuItem.name}
                </Link>
              );
            } else {
              return (
                <Collapsible key={menuItem.id}>
                  <CollapsibleTrigger className="group flex items-center justify-between w-full py-3 font-bold hover:bg-muted-foreground/10 px-4">
                    {menuItem.name}
                    <ChevronDown className="group-data-[state=open]:rotate-180 transition duration-290" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6">
                    {menuItem.subMenus.map((subMenuItem) => (
                      <Link
                        key={subMenuItem.id}
                        href={subMenuItem.href}
                        className="block py-3 rounded-sm pl-3 hover:bg-muted-foreground/10"
                      >
                        {subMenuItem.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            }
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShopMenuMobile;
