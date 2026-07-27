import { ProductStatus } from "../types/types";

export const productStatusClassName: Record<ProductStatus, string> = {
  delivered: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  processing: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  shipped: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  cancelled: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export const productStatusLabel: Record<ProductStatus, string> = {
  delivered: "Delivered",
  processing: "Processing",
  pending: "Pending",
  shipped: "Shipped",
  cancelled: "Cancelled",
};
