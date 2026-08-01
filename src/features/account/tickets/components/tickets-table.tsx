"use client";
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
import { useGetTickets } from "../services/useQueries";

const TicketsTable = () => {
  const { data } = useGetTickets();
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
        {data?.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.id}</TableCell>
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
                <Link href={`/account/tickets/${ticket.id}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TicketsTable;
