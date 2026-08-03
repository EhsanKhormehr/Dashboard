import PageHeader from "@/components/common/page-header";
import Pagination from "@/components/common/pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TicketsStat from "@/features/dashboard/tickets/components/tickets-stat";
import TicketsTable from "@/features/dashboard/tickets/components/tickets-table";
import React from "react";
import {
  TicketCategory,
  TicketStatus,
} from "../../../../../generated/prisma/enums";
import { getAllTickets } from "@/features/dashboard/tickets/services/actions";
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

const DashboardTickets = async ({ searchParams }: TicketsProps) => {
  const urlParams = await searchParams;
  const tickets = await getAllTickets(urlParams);

  return (
    <div>
      <PageHeader title="Tickets" />
      <div className="mt-6">
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <TicketsStat />
          <TicketsStat />
          <TicketsStat />
          <TicketsStat />
          <TicketsStat />
        </div> */}
        <Card className="shadow-card mt-6 py-8">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <TicketsFilter />
            <TicketsTable tickets={tickets.tickets} />
            {tickets.tickets.length > 0 && (
              <Pagination
                baseHref="/dashboard/tickets"
                currentPage={tickets.page}
                pageSize={String(tickets.perPage)}
                totalItemsCount={tickets.totalCount}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardTickets;
