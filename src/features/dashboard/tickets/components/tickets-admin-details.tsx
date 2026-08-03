"use client"
import React from "react";
import { getTicketById } from "../services/actions";
import TicketDetailsWrapper from "@/features/account/tickets/components/ticket-details-wrapper";
import { useGetTicketById } from "../services/useQueries";

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
