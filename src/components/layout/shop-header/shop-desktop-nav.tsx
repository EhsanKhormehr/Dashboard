"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";
import Link from "next/link";
import { shopMenuItems } from "./data";

const ShopDesktopNav = () => {
  return (
    <NavigationMenu viewport={false} className="hidden md:flex">
      <NavigationMenuList>
        {shopMenuItems.map((item) => {
          const hasChildren = Boolean(item.children?.length);

          if (!hasChildren) {
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink asChild>
                  <Link href={item.href ?? "#"} className="text-sm font-medium">
                  {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuTrigger>
                <span>{item.title}</span>
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="w-55 p-2">
                  {item.children?.map((child)=>(
                    <li key={child.id}>
                      <Link href={child.href ?? "#"} className="block hover:bg-accent p-1 rounded-sm">{child.title}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ShopDesktopNav;
