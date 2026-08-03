"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminReplyTicket, closeTicket, openTicket } from "./actions";
import { toast } from "sonner";

export const useAdminReplyTicket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      message,
      ticketId,
    }: {
      message: string;
      ticketId: string;
    }) => adminReplyTicket({ message, ticketId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("Ticket send successfully!");
    },
  });
};

export const useCloseTicket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: closeTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("Ticket closed successfully!");
    },
  });
};

export const useOpenTicket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: openTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("Ticket closed successfully!");
    },
  });
};
