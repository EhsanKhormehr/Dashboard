import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Ticket } from "../types/types";
import { Badge } from "@/components/ui/badge";
import {
  ticketStatusLabels,
  ticketStatusVariants,
} from "../lib/tickets-status";
import { ArrowRight } from "lucide-react";

type RecentTicketCardProps = {
  ticket: Ticket;
};

const RecentTicketCard = ({ ticket }: RecentTicketCardProps) => {
  return (
    <div className="border rounded-xl p-4 bg-background">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">
            {ticket.title}
          </span>
          <span className="text-xs font-normal text-muted-foreground mt-3">
            {ticket.description}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Button
            className="text-xs font-semibold"
            asChild
            variant={"outline"}
            size={"sm"}
          >
            <Link href={"/account/tickets"}>
              View
              <ArrowRight />
            </Link>
          </Button>
          <Badge className={`${ticketStatusVariants[ticket.status]} mt-3`}>
            {ticketStatusLabels[ticket.status]}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default RecentTicketCard;
