import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CartSummary = () => {
  return (
    <div className="col-span-4 bg-surface rounded-xl shadow-card self-start">
      <div className="px-4 py-3 border-b">
        <h3 className="font-bold text-center">Cart Summary</h3>
      </div>
      <div className="px-4 py-3 ">
        <div className="flex justify-between items-center my-2">
          <span className="text-sm font-semibold">Products Total</span>
          <span className="font-black">$900</span>
        </div>
        <div className="flex justify-between items-center my-2 text-destructive">
          <span className="text-sm font-semibold">Total Discount</span>
          <span className="font-black">$0</span>
        </div>
        <div className="flex justify-between items-center my-2 text-muted-foreground">
          <span className="text-sm font-semibold">Shipping Fee</span>
          <span className="font-black">$10</span>
        </div>
        <div className="flex justify-between items-center my-2 border-t py-3">
          <span className="text-sm font-semibold">Amount Payable</span>
          <span className="font-black">$910</span>
        </div>
        <Button className="w-full py-6 rounded-2xl font-bold cursor-pointer" asChild    >
          <Link href={"/checkout"}>Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
