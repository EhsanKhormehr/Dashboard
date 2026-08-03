import React from "react";

const TicketsStat = () => {
  return (
    <div className="rounded-md bg-white px-5 py-4 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">All Tickets</p>
      <div className="mt-2 flex items-end gap-2">
        <span className="text-2xl font-bold text-dashboard-text">124</span>
        <span className="pb-1 text-xs font-medium text-muted-foreground/80">Total</span>
      </div>
    </div>
  );
};

export default TicketsStat;
