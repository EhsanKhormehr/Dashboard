"use client";
import React from "react";
import TicketDetailsHeader from "./ticket-details-header";
import TicketDetailsMessages from "./ticket-details-messages";
import TicketDetailsForm from "./ticket-details-form";
import { Prisma } from "../../../../../generated/prisma/browser";
import { useGetTicketById } from "../services/useQueries";

type TicketDetailsWrapperProps = {
  ticketId: string;
};

const TicketDetailsWrapper = ({ ticketId }: TicketDetailsWrapperProps) => {
  const { data: ticket } = useGetTicketById(ticketId);
  if (!ticket) {
    return <div>Ticket Not Found!</div>;
  }
  return (
    <div>
      <TicketDetailsHeader
        subject={ticket.subject}
        status={ticket.status}
        category={ticket.category}
        createdAt={ticket.createdAt}
        id={ticket.id}
      />
      <TicketDetailsMessages messages={ticket.messages} />
      <TicketDetailsForm ticketId={ticket.id} />
    </div>
  );
};

export default TicketDetailsWrapper;
