"use client"
import React from "react";
import { getTicketById } from "../services/actions";
import { useGetTicketById } from "../services/useQueries";
import TicketDetailsWrapper from "@/features/shared/tickets/components/ticket-details-wrapper";

type TicketAdminDetailsWrapperProps = {
  ticketId: string;
};

const TicketAdminDetailsWrapper =  ({
  ticketId,
}: TicketAdminDetailsWrapperProps) => {
  const {data:ticket} =  useGetTicketById(ticketId);
  if (!ticket) {
    return <div>Ticket Not Found!</div>;
  }
  return <div>
    <TicketDetailsWrapper ticket={ticket} role="ADMIN" />
  </div>;
};

export default TicketAdminDetailsWrapper;
