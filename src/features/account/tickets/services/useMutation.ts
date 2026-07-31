"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket } from "./actions";
import { toast } from "sonner";

export const useCreateTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("Ticket send successfully!")
    },
  });
};
