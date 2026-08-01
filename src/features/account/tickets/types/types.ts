export type TicketStatus = "OPEN" | "PENDING" | "ANSWERED" | "CLOSED";

export type TicketPriority = "low" | "medium" | "high";

export type TicketCategory =
  | "order"
  | "payment"
  | "shipping"
  | "return"
  | "technical"
  | "other";

export type Ticket = {
  id: string;
  ticketNumber: string;
  subject: string;
  category: TicketCategory;
  status: TicketStatus;
  priority: TicketPriority;
  lastMessage: string;
  createdAt: string;
  updatedAt: string;
};

