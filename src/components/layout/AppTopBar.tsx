import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronDown, KeyRound, LogOut, UserRoundCog } from "lucide-react";
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

export default function AppTopBar() {
  return (
    <div className="bg-sidebar h-[70px] w-full flex justify-end items-center">
      <div className="mr-8 flex items-center">
        <Image
          src={"/Avatar.png"}
          width={44}
          height={44}
          alt="avatar"
          className="cursor-pointer"
        />
        <div className="mx-6">
          <span className="text-sm font-bold block">Ehsan</span>
          <span className="text-xs font-semibold">Admin</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Button
              variant={"outline"}
              className="bg-white rounded-full size-[38px]"
            >
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 shadow-[var(--shadow-dropdown)] bg-sidebar mr-10 mt-2 border-none ">
            <DropdownMenuGroup>
              <DropdownMenuItem className="py-2 cursor-pointer" asChild>
                <Link href={"dashboard/my-account"}>
                  <UserRoundCog />
                  Manage Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="py-2 cursor-pointer" asChild>
                <Link href={"dashboard/change-password"}>
                  <KeyRound />
                  Change Password
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem className="py-2 cursor-pointer" asChild>
                <Link href={"dashboard/logout"}>
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
