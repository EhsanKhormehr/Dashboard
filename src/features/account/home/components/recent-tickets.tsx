import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RecentTicketCard from "./recent-ticket-card";
import { Ticket } from "../types/types";

const tickets: Ticket[] = [
  {
    id: "TIC-2048",
    title: "Payment issue",
    description: "Waiting for reply",
    status: "open",
  },
  {
    id: "TIC-2047",
    title: "Delivery delay",
    description: "Last reply 2h ago",
    status: "pending",
  },
  {
    id: "TIC-2046",
    title: "Refund request",
    description: "Support answered your ticket",
    status: "answered",
  },
  {
    id: "TIC-2045",
    title: "Account issue",
    description: "Ticket has been closed",
    status: "closed",
  },
];

const RecentTickets = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl mt-5 px-4 py-8">
      <div className="flex justify-between items-center">
        <ShopTitle title="Latest Support Tickets" className="text-md" />
        <Button asChild variant={"secondary"}>
          <Link href={"/account/tickets"}>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {tickets.map((ticket) => (
          <RecentTicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default RecentTickets;
