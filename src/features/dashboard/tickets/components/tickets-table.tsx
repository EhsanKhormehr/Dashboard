import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ticketStatusLabels, ticketStatusVariants } from "@/features/account/shared/lib/tickets-status";
import React from "react";

const TicketsTable = () => {
    
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
        <TableRow>
            <TableCell>23</TableCell>
            <TableCell>Ehsan</TableCell>
            <TableCell>Payment problem</TableCell>
            <TableCell>PAYMENT</TableCell>
            <TableCell>
                <Badge className={ticketStatusVariants["OPEN"]}>{ticketStatusLabels["OPEN"]}</Badge>
            </TableCell>
            <TableCell>
                10/10/2026
            </TableCell>
            <TableCell>
                12/10/2026
            </TableCell>
            <TableCell>
                <Button>View</Button>
            </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TicketsTable;
