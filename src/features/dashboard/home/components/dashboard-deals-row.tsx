import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { DashboardDeals } from "@/data/dashboard-deals-data";
import Image from "next/image";
import React from "react";

type DashboardDealsRowProps = {
  props: DashboardDeals;
};

const statusLabel = {
  delivered: "Delivered",
  pending: "Pending",
  rejected: "Rejected",
}

const statusClassName = {
  delivered: "bg-[#00B69B]",
  pending: "bg-amber-400",
  rejected: "bg-rose-500",
};

export default function DashboardDealsRow({ props }: DashboardDealsRowProps) {
  return (
    <TableRow className="py-4">
      <TableCell className="flex items-center py-3">
        <Image
          src={props.image}
          width={36}
          height={36}
          alt="apple-watch"
          className="mr-3"
        />
        {props.name}
      </TableCell>
      <TableCell>{props.location}</TableCell>
      <TableCell>{props.date}</TableCell>
      <TableCell>{props.piece}</TableCell>
      <TableCell>${props.amount}</TableCell>
      <TableCell>
        <Badge className={`${statusClassName[props.status]} font-bold text-sm py-3`}>
            {statusLabel[props.status]}

        </Badge>
      </TableCell>
    </TableRow>
  );
}
