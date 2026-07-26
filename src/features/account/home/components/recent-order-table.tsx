import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";
import { ProductStatus } from "../types/types";
import {
  productStatusClassName,
  productStatusLabel,
} from "../lib/product-status";
import { Badge } from "@/components/ui/badge";

type RecentOrder = {
  id: string;
  items: number;
  date: string;
  total: number;
  status: ProductStatus;
};

const recentOrders: RecentOrder[] = [
  {
    id: "ORD-1024",
    items: 3,
    date: "Jul 24, 2026",
    total: 777,
    status: "shipped",
  },
  {
    id: "ORD-1025",
    items: 1,
    date: "Jul 22, 2026",
    total: 249,
    status: "delivered",
  },
  {
    id: "ORD-1026",
    items: 2,
    date: "Jul 20, 2026",
    total: 528,
    status: "processing",
  },
  {
    id: "ORD-1027",
    items: 1,
    date: "Jul 18, 2026",
    total: 99,
    status: "pending",
  },
];

const RecentOrderTable = () => {
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Order Id</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.items} items</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>${order.total}</TableCell>
            <TableCell>
              <Badge className={productStatusClassName[order.status]}>
                {productStatusLabel[order.status]}
              </Badge>
            </TableCell>
            <TableCell>
              <Button asChild variant={"outline"}>
                <Link href={`/account/orders/${order.id}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentOrderTable;
