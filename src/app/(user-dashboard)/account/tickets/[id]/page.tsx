import TicketUserDetailsWrapper from "@/features/account/tickets/components/ticket-user-details";
import { getTicketById } from "@/features/account/tickets/services/actions";
import React from "react";

type TicketDetailsPageProps = {
  params: {
    id: string;
  };
};

const TicketDetailsPage = async ({ params }: TicketDetailsPageProps) => {
  const param = await params;
  const ticketId = param.id;

  const ticket = await getTicketById(ticketId);

  if (!ticket) {
    return <div>Ticket Not Found!</div>;
  }

  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
      <TicketUserDetailsWrapper ticketId={ticketId} />
    </div>
  );
};

export default TicketDetailsPage;
