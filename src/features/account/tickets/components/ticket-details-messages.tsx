import React from "react";
import TicketDetailsMessageBox from "./ticket-details-message-box";
import { ScrollArea } from "@/components/ui/scroll-area";

const TicketDetailsMessages = () => {
  return (
    <div>
      <ScrollArea className="h-[600px] py-5 w-full flex flex-col border-b">
        <TicketDetailsMessageBox isSender={true} />
        <TicketDetailsMessageBox isSender={false} />
        <TicketDetailsMessageBox isSender={true} />
        <TicketDetailsMessageBox isSender={false} />
        <TicketDetailsMessageBox isSender={true} />
        <TicketDetailsMessageBox isSender={false} />
      </ScrollArea>
    </div>
  );
};

export default TicketDetailsMessages;
