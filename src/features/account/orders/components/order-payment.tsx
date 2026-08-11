import ShopTitle from "@/components/common/shop-title";
import React from "react";

const OrderPayment = () => {
  return (
    <div className="rounded-2xl shadow-soft-card bg-background p-4">
      <div>
        <ShopTitle
          isShape={false}
          title="Payment Summary"
          className="text-base"
        />
      </div>
      <div className="mt-5 border-b pb-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[13px] sm:text-sm text-muted-foreground">Subtotal</span>
          <span className="text-[13px] sm:text-sm font-medium text-foreground">$1,200</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[13px] sm:text-sm text-destructive">Discount</span>
          <span className="text-[13px] sm:text-sm font-medium text-destructive">-$100</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[13px] sm:text-sm text-muted-foreground">Shipping</span>
          <span className="text-[13px] sm:text-sm font-medium text-foreground">$20</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[13px] sm:text-sm text-muted-foreground">Tax</span>
          <span className="text-[13px] sm:text-sm font-medium text-foreground">$30</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="font-semibold text-[14px] sm:text-base text-foreground">Total</span>
        <span className="font-semibold text-[14px] sm:text-base text-foreground">$1,150</span>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs sm:text-sm text-muted-foreground">Payment Method</span>
        <span className="text-xs sm:text-sm font-medium text-foreground">
          Credit Card **** 4242
        </span>
      </div>
    </div>
  );
};

export default OrderPayment;
