"use client";
import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { month: "January", sales: 34000 },
  { month: "February", sales: 20000 },
  { month: "March", sales: 64000 },
  { month: "April", sales: 78900 },
  { month: "May", sales: 17000 },
  { month: "June", sales: 23000 },
  { month: "July", sales: 34000 },
  { month: "August", sales: 64300 },
  { month: "September", sales: 5000 },
  { month: "October", sales: 30230 },
  { month: "November", sales: 74830 },
  { month: "December", sales: 38920 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#4379EE",
  },
} satisfies ChartConfig;

export default function DashboardChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  return (
    <Card className="shadow-card">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <CardTitle className="font-bold text-2xl">Sales Details</CardTitle>

        <Select>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="January" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {chartData.map((months) => (
              <SelectItem value={months.month} key={months.month} className="rounded-lg">
                {months.month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 ">
        <ChartContainer
          config={chartConfig}
          className="overflow-hidden h-[400px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.3}
                />{" "}
                <stop
                  offset="95%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <YAxis
              dataKey="sales"
              domain={[0, 100000]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}%`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillSales)"
              stroke="var(--color-sales)"
              strokeWidth={3}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
