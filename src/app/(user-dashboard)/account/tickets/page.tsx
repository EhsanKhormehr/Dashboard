import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import TicketsTable from "@/features/account/tickets/components/tickets-table";
import { getTickets } from "@/features/account/tickets/services/actions";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  TicketCategory,
  TicketStatus,
} from "../../../../../generated/prisma/enums";
import Pagination from "@/components/common/pagination";
import TicketsFilter from "@/features/shared/tickets/components/tickets-filter";

type TicketsProps = {
  searchParams: Promise<{
    search?: string;
    status?: TicketStatus | "DEFAULT";
    category?: TicketCategory | "DEFAULT";
    perPage?: string;
    page?: string;
  }>;
};

const Tickets = async ({ searchParams }: TicketsProps) => {
  const urlParams = await searchParams;
  const tickets = await getTickets(urlParams);
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
        <TicketsTable tickets={tickets.tickets} />
        <Pagination
          baseHref="/account/tickets"
          currentPage={1}
          totalItemsCount={tickets.totalCount}
          pageSize={String(tickets.perPage)}
        />
      </div>
    </div>
  );
};

export default Tickets;
