"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import React from "react";

const CartQuantityCounter = () => {
  return (
    <div className="flex items-center">
      <Button variant={"ghost"} asChild>
        <Minus className="size-10" />
      </Button>
      <Input className="w-10 h-8 rounded-sm text-center" />
      <Button variant={"ghost"} asChild>
        <Plus className="size-10" />
      </Button>
    </div>
  );
};

export default CartQuantityCounter;
