import React from "react";
import AccountStatsBox, { AccountStatsBoxProps } from "./account-stats-box";
import { Headphones, Package, ShoppingBag, Wallet } from "lucide-react";

const stats: AccountStatsBoxProps[] = [
  {
    title: "Wallet Balance",
    value: "2,500,000 Toman",
    description: "Available for your next purchases",
    icon: Wallet,
    variant: "green",
  },
  {
    title: "My Orders",
    value: "12 Orders",
    description: "3 orders are being processed",
    icon: ShoppingBag,
    variant: "purple",
  },
  {
    title: "My Products",
    value: "8 Products",
    description: "2 Products completed",
    icon: Package,
    variant: "orange",
  },
  {
    title: "Support Tickets",
    value: "2 Open Tickets",
    description: "Last reply: 1 hour ago",
    icon: Headphones,
    variant: "yellow",
  },
];

const AccountStatsSection = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {stats.map((stat) => (
        <AccountStatsBox
          key={stat.title}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          variant={stat.variant}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default AccountStatsSection;
