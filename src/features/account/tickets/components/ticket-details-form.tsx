"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import React from "react";
import {
  detailsTicketDefaultValues,
  DetailsTicketFormValues,
  detailsTicketSchema,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/error-message";
import { useReplyTicket } from "../services/useMutation";

type TicketDetailsFormProps = {
  ticketId: string;
};

const TicketDetailsForm = ({ ticketId }: TicketDetailsFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<DetailsTicketFormValues>({
    resolver: zodResolver(detailsTicketSchema),
    defaultValues: detailsTicketDefaultValues,
  });
  const { mutate } = useReplyTicket();

  const sendTicketSubmitHandler = (data: DetailsTicketFormValues) => {
    mutate({ message: data.message, ticketId });
  };
  return (
    <form className="py-5" onSubmit={handleSubmit(sendTicketSubmitHandler)}>
      <Controller
        control={control}
        name="message"
        render={({ field }) => (
          <Textarea
            value={field.value}
            onChange={(event) => field.onChange(event.target.value)}
            className="bg-background h-[200px]"
            placeholder="Enter your message..."
          ></Textarea>
        )}
      />
      {errors.message && <ErrorMessage text={errors.message.message} />}
      <div className="flex justify-end">
        <Button type="submit" className="mt-5 px-10 py-5 cursor-pointer">
          Send
        </Button>
      </div>
    </form>
  );
};

export default TicketDetailsForm;
