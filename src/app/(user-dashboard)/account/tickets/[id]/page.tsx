import TicketDetailsForm from "@/features/account/tickets/components/ticket-details-form";
import TicketDetailsHeader from "@/features/account/tickets/components/ticket-details-header";
import TicketDetailsMessages from "@/features/account/tickets/components/ticket-details-messages";
import React from "react";

const TicketDetailsPage = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
        <TicketDetailsHeader />
        <TicketDetailsMessages/>
        <TicketDetailsForm />   
    </div>
  );
};

export default TicketDetailsPage;
