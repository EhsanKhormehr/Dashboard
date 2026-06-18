import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";
import DashboardDealsRow from "./dashboard-deals-row";
import { data } from "@/data/dashboard-deals-data";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


export default function DashboardDeals() {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <CardTitle className="font-bold text-2xl">Deals Details</CardTitle>

        <Select>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="January" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {months.map((month) => (
              <SelectItem value={month} key={month} className="rounded-lg">
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <Table className="min-w-[900px]">
          <TableHeader className="bg-[var(--table-header-bg)]">
            <TableRow className="!border-b-0">
              <TableHead className="font-bold text-sm py-4">
                Product Name
              </TableHead>
              <TableHead className="font-bold text-sm py-4">Location</TableHead>
              <TableHead className="font-bold text-sm py-4">
                Date - Time
              </TableHead>
              <TableHead className="font-bold text-sm py-4">Piece</TableHead>
              <TableHead className="font-bold text-sm py-4">Amount</TableHead>
              <TableHead className="font-bold text-sm py-4">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-dashboard-text font-semibold">
            {data.map((product) => (
              <DashboardDealsRow key={product.id} props={product}/>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
