"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  ChevronDown,
  KeyRound,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  UserRoundCog,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useMeQuery } from "@/features/auth/me/services/useQueries";
import { useSidebar } from "../ui/sidebar";
import ToggleTheme from "../common/toggle-theme";

export default function AppTopBar() {
  const { data } = useMeQuery();
  const { toggleSidebar, open } = useSidebar();
  console.log(open);
  return (
    <div className="bg-surface h-[70px] w-full flex justify-between items-center px-3 md:px-5 lg:px-8">
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer"
        onClick={toggleSidebar}
      >
        {open ? (
          <PanelLeftClose className="size-5" />
        ) : (
          <PanelLeftOpen className="size-5" />
        )}
      </Button>
      <div className=" flex items-center">
        <div className="mr-6">
          <ToggleTheme />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <div className="flex items-center justify-between">
              <Image
                src={"/Avatar.png"}
                width={44}
                height={44}
                alt="avatar"
                className="cursor-pointer"
              />
              <div className="mx-6 hidden">
                <span className="text-sm font-bold block">
                  {data?.user?.userName}
                </span>
                <span className="text-xs font-semibold">
                  {data?.user?.role}
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 shadow-card bg-surface mr-10 mt-2 border-none ">
            <DropdownMenuGroup>
              <DropdownMenuItem className="py-2 cursor-pointer" asChild>
                <Link href={"/dashboard/my-account"}>
                  <UserRoundCog />
                  Manage Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="py-2 cursor-pointer" asChild>
                <Link href={"/dashboard/change-password"}>
                  <KeyRound />
                  Change Password
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem className="py-2 cursor-pointer" asChild>
                <Link href={"/dashboard/logout"}>
                  <LogOut />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
