import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LayoutGrid, Moon } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderNav = () => {
  return (
    <div className="px-2 md:px-4 xl:px-14 py-2 bg-surface hidden lg:flex items-center justify-between">
      <NavigationMenu viewport={false} className="hidden lg:flex z-10">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <LayoutGrid className="mr-3"/>
              Product Category
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/"}>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/"}>All Products</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/"}>About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant={"outline"} asChild className="size-[45px] rounded-full bg-surface cursor-pointer border-none shadow-sm lg:hidden">
          <LayoutGrid className="size-[26px]"  strokeWidth={1.3}/>
        </Button>
      <div>
        <Button variant={"outline"} asChild className="size-[45px] rounded-full bg-surface cursor-pointer border-none shadow-sm">
          <Moon className="size-[26px]"  strokeWidth={1.3}/>
        </Button>
      </div>
    </div>
  );
};

export default HeaderNav;
