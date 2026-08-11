import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import React from "react";

const steps = [
  {
    label: "Pending",
    title: "Order Placed",
    date: "Jan 12, 2026",
    status: "completed",
  },
  {
    label: "Processing",
    title: "Processing",
    date: "Jan 13, 2026",
    status: "completed",
  },
  {
    label: "Shipped",
    title: "Shipped",
    date: "Jan 14, 2026",
    status: "current",
  },
  {
    label: "Delivered",
    title: "Delivered",
    date: "Expected Jan 18, 2026",
    status: "upcoming",
  },
] as const;

const OrderStatus = () => {
  return (
    <div className="bg-background p-4 rounded-2xl shadow-soft-card">
      <div>
        <ShopTitle isShape={false} title="Order Status" className="text-base" />
      </div>
      <div className="mt-5">
        <div className="flex">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className="relative flex flex-1 flex-col items-center text-center"
            >
              {index !== steps.length - 1 && (
                <div className="absolute left-1/2 top-4 h-px w-full bg-border" />
              )}

              <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {index + 1}
              </div>

              <div className="mt-2">
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  {step.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {step.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5 flex items-center justify-between rounded-xl px-3 py-2">
          <span className="text-sm text-muted-foreground">Status:</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Out for Delivery
          </span>
        </div>
        <div className="mt-5 border-t border-dashed pt-5">
          <h4 className="text-sm font-medium text-foreground">
            Shipment Details
          </h4>
        </div>
        <div className="space-y-3 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Tracking ID:</span>
            <span className="text-sm font-medium text-surface-foreground">
              TRK-9823410
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Carrier:</span>
            <span className="text-sm font-medium text-surface-foreground">
              Tipax
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">
              Est. Delivery:
            </span>
            <span className="text-sm font-semibold text-foreground">
              Jan 18, 2026
            </span>
          </div>
        </div>
        <Button className="w-full mt-4 rounded-2xl py-5 cursor-pointer">View Invoice</Button>
      </div>
    </div>
  );
};

export default OrderStatus;
