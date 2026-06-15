"use client";
import Image from "next/image";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ROUTE_GROUPS } from "@/config/sidebar.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AppSidebar() {
  const path = usePathname();
  return (
    <div>
      <Sidebar>
        <SidebarHeader className="justify-center">
          <Link
            href="/admin/dashboard"
            className="flex items-center justify-center"
          >
            <Image
              className="block"
              src={"/LogoLight.png"}
              width={129}
              height={27}
              alt="Logo"
            />
          </Link>
        </SidebarHeader>
        <SidebarContent className="px-6">
          {ROUTE_GROUPS.map((group) => (
            <SidebarGroup key={group.group}>
              {!!group.group && (
                <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
              )}

              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const isActive = item.href === path;
                    console.log(isActive, item.href, path);
                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className="justify-center my-1 py-5 data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:py-6"
                        >
                          <Link href={item.href} className="text-sm">
                            {item.label}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="justify-center my-1 py-5 data-[active=true]:bg-primary data-[active=true]:text-background data-[active=true]:py-6"
                  >
                    <Link href="/settings" className="text-sm">
                      Settings
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="justify-center my-1 py-5 data-[active=true]:bg-primary data-[active=true]:text-background data-[active=true]:py-6"
                  >
                    <Link href="/settings" className="text-sm">
                      Logout
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
