import AccountStatsSection from "@/features/account/home/components/account-stats-section";
import RecentlyPurchasedProducts from "@/features/account/home/components/recently-purchased-products";
import React from "react";

const Account = () => {
  return (
    <div>
      <AccountStatsSection />
      <RecentlyPurchasedProducts />
    </div>
  );
};

export default Account;
