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
import { Ticket } from "../types/types";
import { Badge } from "@/components/ui/badge";
import {
  ticketStatusLabels,
  ticketStatusVariants,
} from "../../shared/lib/tickets-status";

export const tickets: Ticket[] = [
  {
    id: "1",
    ticketNumber: "TK-1024",
    subject: "Order has not arrived yet",
    category: "shipping",
    status: "open",
    priority: "high",
    lastMessage:
      "My order was supposed to arrive yesterday, but I have not received it yet.",
    createdAt: "2026-07-29T10:20:00Z",
    updatedAt: "2026-07-31T08:45:00Z",
  },
  {
    id: "2",
    ticketNumber: "TK-1023",
    subject: "Payment was charged twice",
    category: "payment",
    status: "pending",
    priority: "high",
    lastMessage: "I paid once, but my bank account shows two charges.",
    createdAt: "2026-07-27T14:10:00Z",
    updatedAt: "2026-07-30T16:15:00Z",
  },
  {
    id: "3",
    ticketNumber: "TK-1022",
    subject: "Request for product return",
    category: "return",
    status: "answered",
    priority: "medium",
    lastMessage: "Support replied with return instructions.",
    createdAt: "2026-07-24T09:30:00Z",
    updatedAt: "2026-07-29T12:00:00Z",
  },
  {
    id: "4",
    ticketNumber: "TK-1021",
    subject: "Cannot update profile phone number",
    category: "technical",
    status: "open",
    priority: "medium",
    lastMessage: "I get an error when trying to update my phone number.",
    createdAt: "2026-07-22T18:40:00Z",
    updatedAt: "2026-07-28T11:25:00Z",
  },
  {
    id: "5",
    ticketNumber: "TK-1020",
    subject: "Question about order cancellation",
    category: "order",
    status: "closed",
    priority: "low",
    lastMessage: "The issue was resolved and the ticket was closed.",
    createdAt: "2026-07-18T13:00:00Z",
    updatedAt: "2026-07-25T15:35:00Z",
  },
];

const TicketsTable = () => {
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Ticket</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Updated</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.ticketNumber}</TableCell>
            <TableCell>{ticket.subject}</TableCell>
            <TableCell>{ticket.category}</TableCell>
            <TableCell>
              <Badge className={ticketStatusVariants[ticket.status]}>
                {ticketStatusLabels[ticket.status]}
              </Badge>
            </TableCell>
            <TableCell>{new Date(ticket.updatedAt).toLocaleString()}</TableCell>
            <TableCell>
              <Button asChild variant={"outline"}>
                <Link href={`/account/tickets/`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TicketsTable;
