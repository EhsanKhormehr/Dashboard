"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CartItem = () => {
  const [value, setValue] = useState(1);
  console.log(value);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center last:border-0 border-b p-4">
      <div className="flex lg:justify-between">
        <Link href={"/"} className="bg-background p-3 rounded-xl flex items-center justify-center shrink-0">
          <Image
            src={"/shop/iphone-14.png"}
            width={50}
            height={50}
            alt="iphone"
          />
        </Link>
        <div className="ml-4 flex flex-col justify-around items-start">
          <span className="font-semibold text-xs md:text-sm">Iphone 14 Pro Max Iphone 14 Pro Max Iphone 14 Pro Max Iphone 14 Pro Max Iphone 14 Pro Max Iphone 14 Pro Max</span>
          <Button
            variant={"destructive"}
            size={"sm"}
            className="cursor-pointer mt-2"
          >
            Remove
          </Button>
        </div>
      </div>
      <div className="flex lg:flex-col justify-between items-center mt-5 lg:mt-0">
        <span className="text-sm font-bold">$1,300</span>
        <div className="flex justify-around h-9 items-center rounded-full bg-background p-1 lg:mt-3">
          <Button
            variant={"ghost"}
            className="flex size-7 items-center justify-center rounded-full bg-white hover:!bg-white hover:text-black text-black shadow-sm cursor-pointer"
            onClick={() => {
              setValue((prev) => Math.max(prev - 1, 1));
            }}
          >
            <Minus />
          </Button>
          <Input
            type="text"
            className="bg-transparent dark:bg-transparent border-0 !ring-0 text-center px-0 w-[40px]"
            value={value}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "") {
                setValue(0);
              }
              if (!/^[0-9]\d*$/.test(value)) return;
              setValue(Number(event.target.value));
            }}
          />
          <Button
            className="flex size-7 items-center justify-center rounded-full text-white shadow-sm cursor-pointer border-0"
            onClick={() => {
              setValue((prev) => prev + 1);
            }}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
