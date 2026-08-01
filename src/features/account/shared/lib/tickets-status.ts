import { TicketStatus } from "../types/types";

export const ticketStatusVariants: Record<TicketStatus, string> = {
  OPEN: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  PENDING: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  ANSWERED: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  CLOSED: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
};

export const ticketStatusLabels: Record<TicketStatus, string> = {
  OPEN: "Open",
  PENDING: "Pending",
  ANSWERED: "Answered",
  CLOSED: "Closed",
};
