"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { accountMenuItems } from "@/config/account-sidebar.config";
import {
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";



const AccountSidebar =  () => {
  const pathname = usePathname();
  
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <Avatar className="size-[44px]">
              <AvatarImage src={"/avatar-user.jpg"} alt="avatar" />
            </Avatar>
            <div className="flex flex-col ml-3 group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-bold">Ehsan</span>
              <span className="text-xs mt-0.5">09023555555</span>
            </div>
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <Button variant={"ghost"}>
              <LogOut className="size-[18px]" />
            </Button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenu>
            {accountMenuItems.map((item) => {
              const isActive = item.href === pathname
              
              return (
                <SidebarMenuItem
                  key={item.title}
                  className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center "
                >
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={item.href} className="flex items-center py-6">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AccountSidebar;
