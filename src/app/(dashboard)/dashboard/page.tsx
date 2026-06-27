import PageHeader from "@/components/common/page-header";
import DashboardCard from "@/features/dashboard/home/components/dashboard-card";
import DashboardChart from "@/features/dashboard/home/components/dashboard-chart";
import DashboardDeals from "@/features/dashboard/home/components/dashboard-deals-table";
import { Box, ChartNoAxesCombined, ClockFading, Users } from "lucide-react";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard"/> 
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
