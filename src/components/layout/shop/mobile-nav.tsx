"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  House,
  LayoutGrid,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import HeaderCategory from "./header-category";
import MobielNavForm from "./mobile-nav-form";

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(diff) < 8) return;

      if (diff > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed left-0 right-0 bg-surface/60 backdrop-blur-[4px] shadow-card mx-2 md:mx-4 rounded-full lg:hidden z-10 transition-all ${isVisible ? "bottom-4":"-bottom-20" }`}>
      <div className="grid grid-cols-5">
        <Button asChild variant={"ghost"}>
          <Link href={"/"} className="py-8">
            <House className="size-[25px]" />
          </Link>
        </Button>

        <HeaderCategory open={open} onOpenChange={setOpen} />

        <MobielNavForm />

        <Button asChild variant={"ghost"}>
          <Link href={"/profile"} className="py-8">
            <UserRound className="size-[25px]" />
          </Link>
        </Button>

        <Button asChild variant={"ghost"}>
          <Link href={"/cart"} className="py-8">
            <ShoppingBag className="size-[25px]" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
