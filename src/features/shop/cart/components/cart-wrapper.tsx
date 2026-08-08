import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartItem from "./cart-item";

const CartWrapper = () => {
  return (
    <div className="col-span-8 bg-surface rounded-xl shadow-card">
      <div className="border-b px-4 py-3">
        <h3 className="font-bold">Cart Items</h3>
      </div>
      <div >
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartWrapper;
