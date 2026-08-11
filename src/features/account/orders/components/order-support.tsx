import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const OrderSupport = () => {
  return (
    <div className="bg-background p-4 rounded-2xl shadow-soft-card">
      <div>
        <ShopTitle isShape={false} title="Support" className="text-base" />
      </div>
      <div className="mt-4 border-t pt-4">
        <p className="text-sm text-muted-foreground">
          Need help with your order?
        </p>

        <Button asChild size="sm" className="mt-3">
          <Link href="/account/tickets/new">Open Ticket</Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderSupport;
