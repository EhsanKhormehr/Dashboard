import ShopTitle from "@/components/common/shop-title";
import React from "react";

const OrderAddress = () => {
  return (
    <div className="bg-background rounded-2xl p-4 shadow-soft-card">
      <div>
        <ShopTitle
          isShape={false}
          title="Shipping Address"
          className="text-base"
        />
      </div>
      <div className="mt-5 space-y-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted-foreground">
            Recipient
          </span>
          <span className="text-sm font-medium text-foreground">
            Ehsan Khormehr
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted-foreground">
            Phone
          </span>
          <span className="text-sm text-foreground">09023555555</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted-foreground">
            Address
          </span>
          <span className="text-sm leading-6 text-foreground">
            Esfahan, Tohid Miani, 24, 6
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderAddress;
