"use client";
import React from "react";
import TicketDetailsHeader from "./ticket-details-header";
import TicketDetailsMessages from "./ticket-details-messages";
import TicketDetailsForm from "./ticket-details-form";
import { Prisma } from "../../../../../generated/prisma/client";

type UserTicketDetails = Prisma.TicketGetPayload<{
  include: {
    messages: true;
  };
}>;

type AdminTicketDetails = Prisma.TicketGetPayload<{
  include: {
    user: {
      select: {
        id: true;
        userName: true;
        firstName: true;
        lastName: true;
        email: true;
      };
    };
    messages: true;
  };
}>;

type TicketDetailsWrapperProps =
  | {
      role: "USER";
      ticket: UserTicketDetails;
    }
  | {
      role: "ADMIN";
      ticket: AdminTicketDetails;
    };

const TicketDetailsWrapper = ({ ticket, role }: TicketDetailsWrapperProps) => {
  return (
    <div>
      {role === "USER" ? (
        <TicketDetailsHeader
          subject={ticket.subject}
          status={ticket.status}
          category={ticket.category}
          createdAt={ticket.createdAt}
          updatedAt={ticket.updatedAt}
          id={ticket.id}
          role="USER"
        />
      ) : (
        <TicketDetailsHeader
          subject={ticket.subject}
          status={ticket.status}
          category={ticket.category}
          createdAt={ticket.createdAt}
          updatedAt={ticket.updatedAt}
          id={ticket.id}
          role="ADMIN"
          user={ticket.user}
        />
      )}

      <TicketDetailsMessages messages={ticket.messages} role={role} />
      <TicketDetailsForm ticketId={ticket.id} role={role} status={ticket.status} />
    </div>
  );
};

export default TicketDetailsWrapper;
