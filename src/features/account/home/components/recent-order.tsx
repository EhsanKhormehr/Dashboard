import ShopTitle from "@/components/common/shop-title";
import React from "react";
import RecentOrderTable from "./recent-order-table";

const RecentOrder = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
      <ShopTitle title="Recent Order" className="text-md" />
      <div className="mt-5">
        <RecentOrderTable />
      </div>
    </div>
  );
};

export default RecentOrder;
