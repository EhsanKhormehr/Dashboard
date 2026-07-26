import AccountStatsSection from "@/features/account/home/components/account-stats-section";
import RecentOrder from "@/features/account/home/components/recent-order";
import RecentTickets from "@/features/account/home/components/recent-tickets";
import RecentlyPurchasedProducts from "@/features/account/home/components/recently-purchased-products";
import React from "react";

const Account = () => {
  return (
    <div>
      <AccountStatsSection />
      <RecentlyPurchasedProducts />
      <RecentOrder />
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <RecentTickets />
      </div>
    </div>
  );
};

export default Account;
