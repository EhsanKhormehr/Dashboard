"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Bell, ShoppingCart, Sidebar } from "lucide-react";
import Link from "next/link";
import React from "react";

const AccountTopbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-full h-15 bg-surface flex items-center justify-between px-4 sticky top-0 z-[1000]">
      <div>
        <Sidebar
          onClick={toggleSidebar}
          className="size-[24px] text-muted-foreground cursor-pointer"
        />
      </div>
      <div className="flex *:ml-5 ">
        <Link href={"/cart"}>
          <ShoppingCart className="size-[24px] text-muted-foreground" />
        </Link>
        <Link href={"/"}>
          <Bell className="size-[24px] text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
};

export default AccountTopbar;
