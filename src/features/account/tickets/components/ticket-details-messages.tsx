import React from "react";
import TicketDetailsMessageBox from "./ticket-details-message-box";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TicketMessage } from "../../../../../generated/prisma/client";

type TicketDetailsMessagesProps = {
  messages: TicketMessage[];
  role: "ADMIN" | "USER";
};

const TicketDetailsMessages = ({
  messages,
  role,
}: TicketDetailsMessagesProps) => {
  return (
    <div>
      <ScrollArea className="h-[600px] py-5 w-full flex flex-col border-b">
        {messages?.map((message) => (
          <TicketDetailsMessageBox message={message} key={message.id} role={role} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default TicketDetailsMessages;
