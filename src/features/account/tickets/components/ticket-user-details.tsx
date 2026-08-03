"use client";
import React from "react";
import TicketDetailsWrapper from "./ticket-details-wrapper";
import { useGetTicketById } from "../services/useQueries";

type TicketUserDetailsWrapperProps = {
  ticketId: string;
};

const TicketUserDetailsWrapper = ({
  ticketId,
}: TicketUserDetailsWrapperProps) => {
  const {data : ticket} = useGetTicketById(ticketId);
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
