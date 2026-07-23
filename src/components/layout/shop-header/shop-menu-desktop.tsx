"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Menu } from "@/types/menu";

type ShopMenuDesktopProps = {
  data: Menu[];
};

const ShopMenuDesktop = ({ data }: ShopMenuDesktopProps) => {
  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList>
        {data?.map((menuItem) => {
          if (menuItem.subMenus.length === 0) {
            return (
              <NavigationMenuItem key={menuItem.id}>
                <NavigationMenuLink asChild>
                  <Link href={menuItem.href}>{menuItem.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={menuItem.id}>
                <NavigationMenuTrigger>{menuItem.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-52 ">
                    {menuItem.subMenus.map((subMenuItem) => (
                      <li key={subMenuItem.id}>
                        <Link
                          href={subMenuItem.href}
                          className="w-full block py-2 hover:bg-muted-foreground/10 text-sm rounded-sm px-3"
                        >
                          {subMenuItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ShopMenuDesktop;
