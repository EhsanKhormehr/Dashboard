import PageHeader from "@/components/common/page-header";
import { Card, CardContent } from "@/components/ui/card";
import TicketAdminDetailsWrapper from "@/features/dashboard/tickets/components/tickets-admin-details";
import React from "react";

type DashboardTicketDetailsPageProps = {
  params: {
    id: string;
  };
};

const DashboardTicketDetailsPage = async ({
  params,
}: DashboardTicketDetailsPageProps) => {
  const param = await params;
  const ticketId = param.id;
  
  return (
    <div>
      <PageHeader title="Ticket Details" />
      <Card className="shadow-card mt-6">
        <CardContent className="p-4">
          <TicketAdminDetailsWrapper ticketId={ticketId} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardTicketDetailsPage;
