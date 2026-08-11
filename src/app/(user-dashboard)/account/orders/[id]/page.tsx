import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import OrderAddress from "@/features/account/orders/components/order-address";
import OrderPayment from "@/features/account/orders/components/order-payment";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import React from "react";

const OrderDetails = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8 h-[800px]">
      <div className="flex items-center justify-between border-b">
        <div>
          <ShopTitle title="Order Details" />
          <span className="text-xs text-muted-foreground">
            View and manage your orders
          </span>
        </div>
        <div>
          <span className="text-sm text-muted-foreground font-bold">
            #ORD-1024
          </span>
        </div>
        <Button variant={"secondary"} className="cursor-pointer">
          <ArrowLeft />
          Back
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-8">
          <div>
            <ShopTitle
              isShape={false}
              title="Order Status"
              className="text-base"
            />
            <p className="text-xs text-muted-foreground">
              Track the current progress of your order
            </p>
          </div>
        </div>
        <div className="col-span-4">
          <OrderPayment />
          <OrderAddress />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
