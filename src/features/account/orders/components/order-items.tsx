import ShopTitle from "@/components/common/shop-title";
import React from "react";
import OrderItemsCard from "./order-items-card";

const OrderItems = () => {
  return (
    <div className="bg-background rounded-2xl p-4 shadow-soft-card">
      <div>
        <ShopTitle
          isShape={false}
          title="Ordered Items"
          className="text-base"
        />
        <span className="text-xs text-muted-foreground">3 items</span>
      </div>
      <div className="mt-5 space-y-4">
        <OrderItemsCard />
        <OrderItemsCard />
        <OrderItemsCard />
      </div>
    </div>
  );
};

export default OrderItems;
