import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import TicketsFilter from "@/features/account/tickets/components/tickets-filter";
import TicketsPagination from "@/features/account/tickets/components/tickets-pagination";
import TicketsTable from "@/features/account/tickets/components/tickets-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const Tickets = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <ShopTitle title="Support Tickets" />
          <span className="text-xs text-muted-foreground">
            View your support requests and contact our support team.
          </span>
        </div>
        <div>
          <Button
            className="flex items-center cursor-pointer py-4.5"
            variant={"outline"}
            asChild
          >
            <Link href={"/account/tickets/new"}>
              <span>New Ticket</span>
              <Plus />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <TicketsFilter />
        <TicketsTable />
        <TicketsPagination />
      </div>
    </div>
  );
};

export default Tickets;
