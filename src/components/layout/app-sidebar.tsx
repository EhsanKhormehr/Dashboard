"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  ChevronRight,
  LogOut,
  Settings,
} from "lucide-react";

import { ROUTE_GROUPS } from "@/config/sidebar.config";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">

      <SidebarHeader className="h-[70px] items-center justify-center">
        <Link
          href="/dashboard"
          className="flex items-center justify-center"
        >
          <Image
            src="/LogoLight.png"
            width={129}
            height={27}
            alt="DashStack"
            className="group-data-[collapsible=icon]:hidden"
          />

          <div
            className="
              hidden size-8 items-center justify-center
              rounded-md bg-primary
              font-bold text-primary-foreground
              group-data-[collapsible=icon]:flex
            "
          >
            D
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent
        className="
          px-3
          group-data-[collapsible=icon]:px-2
        "
      >
        <SidebarGroup className="p-0">
          <SidebarGroupContent>

            <SidebarMenu>
              {ROUTE_GROUPS.map((group) => {
                const Icon = group.icon;

                if (!group.items) {
                  const isActive =
                    pathname === group.href;

                  return (
                    <SidebarMenuItem key={group.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={group.label}
                        className="
                          my-1 h-10
                          data-[active=true]:bg-primary
                          data-[active=true]:text-primary-foreground
                        "
                      >
                        <Link href={group.href!}>
                          <Icon />

                          <span>
                            {group.label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }

                const hasActiveChild =
                  group.items.some(
                    (item) =>
                      pathname === item.href ||
                      pathname.startsWith(
                        `${item.href}/`,
                      ),
                  );

                return (
                  <Collapsible
                    key={group.label}
                    defaultOpen={hasActiveChild}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>

                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          isActive={hasActiveChild}
                          tooltip={group.label}
                          className="
                            my-1 h-10
                            data-[active=true]:bg-primary/10
                            data-[active=true]:text-primary
                          "
                        >
                          <Icon />

                          <span>
                            {group.label}
                          </span>

                          <ChevronRight
                            className="
                              ml-auto
                              transition-transform
                              duration-200
                              group-data-[state=open]/collapsible:rotate-90
                              group-data-[collapsible=icon]:hidden
                            "
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {group.items.map((item) => {
                            const ItemIcon =
                              item.icon;

                            const isActive =
                              pathname === item.href ||
                              pathname.startsWith(
                                `${item.href}/`,
                              );

                            return (
                              <SidebarMenuSubItem
                                key={item.href}
                              >
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isActive}
                                >
                                  <Link href={item.href}>
                                    <ItemIcon />

                                    <span>
                                      {item.label}
                                    </span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>

                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter
        className="
          px-3 pb-4
          group-data-[collapsible=icon]:px-2
        "
      >
        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              isActive={
                pathname === "/dashboard/settings"
              }
            >
              <Link href="/dashboard/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Logout">
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  );
}