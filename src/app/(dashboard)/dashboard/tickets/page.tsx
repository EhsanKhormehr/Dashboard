import PageHeader from "@/components/common/page-header";
import Pagination from "@/components/common/pagination";
import TicketsFilter from "@/components/shared/tickets-filter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTickets } from "@/features/account/tickets/services/actions";
import MenusTable from "@/features/dashboard/menu/components/menus-table";
import TicketsStat from "@/features/dashboard/tickets/components/tickets-stat";
import TicketsTable from "@/features/dashboard/tickets/components/tickets-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardTickets = () => {
  return (
    <div>
      <PageHeader title="Tickets" />
      <div className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <TicketsStat />
          <TicketsStat />
          <TicketsStat />
          <TicketsStat />
          <TicketsStat />
        </div>
        <Card className="shadow-card mt-6">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">Tickets</CardTitle>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <TicketsFilter />
            <TicketsTable />
            <Pagination baseHref="/" currentPage={1} pageSize="10" totalItemsCount={50} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardTickets;
