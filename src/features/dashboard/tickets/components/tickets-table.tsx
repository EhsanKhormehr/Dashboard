import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ticketStatusLabels,
  ticketStatusVariants,
} from "@/features/account/shared/lib/tickets-status";
import React from "react";
import { TicketsWithUser } from "../types/types";
import Link from "next/link";

type TicketsTableProps = {
  tickets: TicketsWithUser[];
};

const TicketsTable = ({ tickets }: TicketsTableProps) => {
  if (tickets.length === 0) {
    return <p>Ticket not found!</p>
  }
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.id}</TableCell>
            <TableCell>{ticket.user.firstName} {ticket.user.lastName}</TableCell>
            <TableCell>{ticket.subject}</TableCell>
            <TableCell>{ticket.category}</TableCell>
            <TableCell>
              <Badge className={ticketStatusVariants[ticket.status]}>
                {ticketStatusLabels[ticket.status]}
              </Badge>
            </TableCell>
            <TableCell>{new Date(ticket.createdAt).toLocaleDateString()}</TableCell>
            <TableCell>{new Date(ticket.updatedAt).toLocaleDateString()}</TableCell>
            <TableCell>
              <Button asChild>
                <Link href={`/dashboard/tickets/${ticket.id}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TicketsTable;
