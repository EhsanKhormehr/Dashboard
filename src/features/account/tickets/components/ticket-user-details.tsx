"use client";
import React from "react";
import { useGetTicketById } from "../services/useQueries";
import TicketDetailsWrapper from "@/features/shared/tickets/components/ticket-details-wrapper";

type TicketUserDetailsWrapperProps = {
  ticketId: string;
};

const TicketUserDetailsWrapper = ({
  ticketId,
}: TicketUserDetailsWrapperProps) => {
  const {data : ticket,isLoading} = useGetTicketById(ticketId);
  if (!ticket) {
    return <div>Ticket Not Found!</div>;
  }
  return (
    <div>
      <TicketDetailsWrapper ticket={ticket} role="USER" />
    </div>
  );
};

export default TicketUserDetailsWrapper;
