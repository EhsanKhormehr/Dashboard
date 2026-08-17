"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Controller, FormProvider, useForm } from "react-hook-form";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/error-message";
import {
  useAdminReplyTicket,
  useCloseTicket,
  useOpenTicket,
} from "@/features/dashboard/tickets/services/useMutation";
import { useReplyTicket } from "@/features/account/tickets/services/useMutation";
import { TicketStatus } from "../../../../../generated/prisma/enums";
import {
  detailsTicketDefaultValues,
  DetailsTicketFormValues,
  detailsTicketSchema,
} from "../types/schema";
import ControlledTextarea from "@/components/common/controlled-textarea";

type TicketDetailsFormProps = {
  ticketId: string;
  role: "ADMIN" | "USER";
  status: TicketStatus;
};

const TicketDetailsForm = ({
  ticketId,
  role,
  status,
}: TicketDetailsFormProps) => {
  const form = useForm<DetailsTicketFormValues>({
    resolver: zodResolver(detailsTicketSchema),
    defaultValues: detailsTicketDefaultValues,
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;
  const { mutate: replyUser } = useReplyTicket();
  const { mutate: replyAdmin } = useAdminReplyTicket();
  const { mutate: closeTicket } = useCloseTicket();
  const { mutate: openTicket } = useOpenTicket();

  const sendTicketSubmitHandler = (data: DetailsTicketFormValues) => {
    if (role === "USER") {
      replyUser({ message: data.message, ticketId });
    }
    if (role === "ADMIN") {
      replyAdmin({ message: data.message, ticketId });
    }
  };
  const toggleTicketStatusHandler = () => {
    if (status === "OPEN" || status === "ANSWERED" || status === "PENDING") {
      closeTicket(ticketId);
    }
    if (status === "CLOSED") {
      openTicket(ticketId);
    }
  };
  if (status === "CLOSED" && role === "USER") {
    return null;
  }
  return (
    <FormProvider {...form}>
      <form className="py-5" onSubmit={handleSubmit(sendTicketSubmitHandler)}>
        <ControlledTextarea<DetailsTicketFormValues>
          name="message"
          className="bg-background h-[200px]"
          placeholder="Enter your message..."
        />
        <div className="flex justify-end">
          {role === "ADMIN" && (
            <Button
              type="button"
              variant={
                status === "OPEN" ||
                status === "ANSWERED" ||
                status === "PENDING"
                  ? "destructive"
                  : "outline"
              }
              className="mt-5 px-10 py-5 cursor-pointer mr-3"
              onClick={toggleTicketStatusHandler}
            >
              {status === "OPEN" ||
              status === "ANSWERED" ||
              status === "PENDING"
                ? "Close Ticket"
                : "Open Ticket"}
            </Button>
          )}
          <Button type="submit" className="mt-5 px-10 py-5 cursor-pointer">
            Send
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default TicketDetailsForm;
