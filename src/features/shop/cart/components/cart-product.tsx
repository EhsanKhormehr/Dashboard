import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import CartQuantityCounter from "./cart-quantity-counter";

const CartProduct = () => {
  return (
    <div className="flex items-center py-14 border-b w-full">
      <Image src={"/shop/iphone-14.png"} width={90} height={90} alt="iphone" />
      <div className="ml-4 lg:flex lg:items-center justify-between lg:w-full">
        <div>
          <span className="font-bold">
            Apple iPhone 14 Pro Max 128Gb Deep Purple
          </span>
          <span className="block text-sm my-2">#25139526913984</span>
        </div>
        <div className="flex items-center justify-between">
          <CartQuantityCounter />
          <span className="mx-6 text-xl font-bold">$1399</span>
          <Button variant={"ghost"} asChild>
            <X className="size-10" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
