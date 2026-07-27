import ShopTitle from "@/components/common/shop-title";
import OrdersFilter from "@/features/account/orders/components/orders-filter";
import OrdersPagination from "@/features/account/orders/components/orders-pagination";
import OrdersTable from "@/features/account/orders/components/orders-table";
import React from "react";

const Orders = () => {
  return (
    <div>
      <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
        <ShopTitle title="Orders" />
        <span className="text-xs text-muted-foreground">
          View and manage your orders
        </span>
        <div className="mt-5">
          <OrdersFilter />
          <OrdersTable />
          <OrdersPagination />
        </div>
      </div>
    </div>
  );
};

export default Orders;
