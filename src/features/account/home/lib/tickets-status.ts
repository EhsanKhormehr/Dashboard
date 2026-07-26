export type TicketStatus = "open" | "pending" | "answered" | "closed";

export const ticketStatusVariants: Record<TicketStatus, string> = {
  open: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  answered: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  closed: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
};

export const ticketStatusLabels: Record<TicketStatus, string> = {
  open: "Open",
  pending: "Pending",
  answered: "Answered",
  closed: "Closed",
};
