import ShopTitle from "@/components/common/shop-title";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  ticketStatusLabels,
  ticketStatusVariants,
} from "../../shared/lib/tickets-status";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TicketDetailsHeader = () => {
  return (
    <div className="border-b flex items-center justify-between pb-5">
      <div>
        <ShopTitle title="Subject : Payment problem" />
        <div className="flex flex-col sm:flex-row sm:items-center my-1">
          <span className="font-medium text-sm text-dashboard-text/75">
            Ticket : #TK-1001
          </span>
          <Badge className={`${ticketStatusVariants["open"]} my-1 sm:mx-5`}>
            {ticketStatusLabels["open"]}
          </Badge>
          <span className="font-medium text-sm text-dashboard-text/75">
            Order Category
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          Created at : 2026/08/01
        </span>
      </div>
      <Button variant={"secondary"} className="cursor-pointer">
        <ArrowLeft />
        Back
      </Button>
    </div>
  );
};

export default TicketDetailsHeader;
