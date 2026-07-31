import ShopTitle from "@/components/common/shop-title";
import TicketsForm from "@/features/account/tickets/components/tickets-form";
import React from "react";

const NewTicket = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8 max-w-6xl mx-auto">
      <div>
        <ShopTitle title="Create New Ticket" />
        <span className="text-xs text-muted-foreground">
          Tell us what happened and our support team will get back to you.
        </span>
        <div className="mt-5">
          <TicketsForm />
        </div>
      </div>
    </div>
  );
};

export default NewTicket;
