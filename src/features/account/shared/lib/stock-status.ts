import { StockStatus } from "../types/types";

export const stockStatusLabels: Record<StockStatus, string> = {
  available: "Available",
  unavailable: "Unavailable",
};

export const stockStatusVariants: Record<StockStatus, string> = {
  available:
    "border-emerald-200 bg-emerald-500/10 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-500/10 dark:text-emerald-400",
  unavailable:
    "border-red-200 bg-red-500/10 text-red-700 dark:border-red-900/60 dark:bg-red-500/10 dark:text-red-400",
};
