"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { getDiscountCodes } from "../services/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, Power, PowerOff, Trash } from "lucide-react";
import { DiscountCode } from "../../../../../generated/prisma/client";
import {
  useDeleteDiscountCode,
  useToggleDiscountCodeActive,
} from "../services/useMutation";
import getDiscountStatus, { DiscountStatus } from "@/lib/getDiscountStatus";
import { Badge } from "@/components/ui/badge";
import ConfirmDialog from "@/components/common/confirm-dialog";

type DiscountCodeTableProps = {
  discountCodes: DiscountCode[];
};

export const discountIsActiveVariant = {};

export const discountStatusVariants: Record<DiscountStatus, string> = {
  ACTIVE: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",

  SCHEDULED: "bg-blue-500/10 text-blue-600 dark:text-blue-400",

  EXPIRED: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",

  DISABLED: "bg-red-500/10 text-red-600 dark:text-red-400",

  USAGE_LIMIT_REACHED: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export const discountStatusLabels: Record<DiscountStatus, string> = {
  ACTIVE: "Active",
  SCHEDULED: "Scheduled",
  EXPIRED: "Expired",
  DISABLED: "Disabled",
  USAGE_LIMIT_REACHED: "Usage Limit Reached",
};

const DiscountCodeTable = ({ discountCodes }: DiscountCodeTableProps) => {
  const { mutate: toggleActive } = useToggleDiscountCodeActive();
  const { mutate: deleteDiscountCode } = useDeleteDiscountCode();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Discount Type</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Usage Limit</TableHead>
          <TableHead>Used</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Availability</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {discountCodes.map((discount) => {
          const status = getDiscountStatus(discount);

          return (
            <TableRow key={discount.id}>
              <TableCell>{discount.name}</TableCell>
              <TableCell>{discount.code}</TableCell>
              <TableCell>{discount.discountType}</TableCell>
              <TableCell>
                {discount.discountType === "FIXED"
                  ? `$${discount.amount}`
                  : `%${discount.percentage}`}
              </TableCell>
              <TableCell>{discount.usageLimit}</TableCell>
              <TableCell>{discount.usageCount}</TableCell>
              <TableCell>
                <Badge className={`${discountStatusVariants[status]}`}>
                  {discountStatusLabels[status]}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  className={
                    discount.isActive
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  }
                >
                  {" "}
                  {discount.isActive ? "Enabled" : "Disabled"}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(discount.startDate).toDateString()}
              </TableCell>
              <TableCell>{new Date(discount.endDate).toDateString()}</TableCell>
              <TableCell>
                {new Date(discount.createdAt).toDateString()}
              </TableCell>
              <TableCell className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <Link href={`/dashboard/discount-codes/${discount.id}/edit`}>
                    <Edit />
                  </Link>
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() =>
                    toggleActive({
                      id: discount.id,
                      isActive: !discount.isActive,
                    })
                  }
                >
                  {discount.isActive ? <PowerOff /> : <Power />}
                </Button>
                <ConfirmDialog
                  trigger={
                    <Button className="cursor-pointer" variant={"destructive"}>
                      <Trash />
                    </Button>
                  }
                  cancelText="Cancel"
                  confirmText="Delete"
                  confirmVariant="destructive"
                  cancelVariant="outline"
                  title="Are you sure to delete discount code?"
                  onConfirm={() => deleteDiscountCode(discount.id)}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DiscountCodeTable;
