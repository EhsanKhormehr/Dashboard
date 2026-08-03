"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket, replyTicket } from "./actions";
import { toast } from "sonner";

export const useCreateTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("Ticket send successfully!");
    },
  });
};

export const useReplyTicket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      message,
      ticketId,
    }: {
      message: string;
      ticketId: string;
    }) => replyTicket({ message, ticketId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("Ticket send successfully!");
    },
  });
};
