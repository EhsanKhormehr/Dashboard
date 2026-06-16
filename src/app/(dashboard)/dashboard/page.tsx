import DashboardCard from "@/features/dashboard/components/dashboard-card";
import DashboardChart from "@/features/dashboard/components/dashboard-chart";
import DashboardDeals from "@/features/dashboard/components/dashboard-deals-table";
import { Box, ChartNoAxesCombined, ClockFading, Users } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-6">
        <DashboardCard
          title="Total User"
          value="40,689"
          trendIcon="up"
          trendValue="8.5%"
          trendLabel="Up from yesterday"
          icon={Users}
          variant="purple"
        />
        <DashboardCard
          title="Total User"
          value="40,689"
          trendIcon="up"
          trendValue="8.5%"
          trendLabel="Up from yesterday"
          icon={Box}
          variant="yellow"
        />
        <DashboardCard
          title="Total User"
          value="40,689"
          trendIcon="up"
          trendValue="8.5%"
          trendLabel="Up from yesterday"
          icon={ChartNoAxesCombined}
          variant="green"
        />
        <DashboardCard
          title="Total User"
          value="40,689"
          trendIcon="up"
          trendValue="8.5%"
          trendLabel="Up from yesterday"
          icon={ClockFading}
          variant="orange"
        />
      </div>
      <div className="mt-10">
        <DashboardChart />
      </div>
      <div className="mt-10">
        <DashboardDeals />
      </div>
    </div>
  );
}
