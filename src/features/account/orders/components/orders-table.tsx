import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { ProductStatus } from "../../shared/types/types";
import { Badge } from "@/components/ui/badge";
import {
  productStatusClassName,
  productStatusLabel,
} from "../../shared/lib/product-status";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Orders = {
  id: string;
  items: number;
  date: string;
  total: number;
  status: ProductStatus;
};

const orders: Orders[] = [
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

const OrdersTable = () => {
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
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

export default OrdersTable;
