import AccountStatsSection from "@/features/account/home/components/account-stats-section";
import RecentOrder from "@/features/account/home/components/recent-order";
import RecentlyPurchasedProducts from "@/features/account/home/components/recently-purchased-products";
import React from "react";

const Account = () => {
  return (
    <div>
      <AccountStatsSection />
      <RecentlyPurchasedProducts />
      <RecentOrder />
    </div>
  );
};

export default Account;
