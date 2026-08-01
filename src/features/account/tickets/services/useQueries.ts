"use client";

import { useQuery } from "@tanstack/react-query";
import { getTicketById, getTickets } from "./actions";

export const useGetTickets = () => {
  return useQuery({
    queryFn: getTickets,
    queryKey: ["tickets"],
  });
};

export const useGetTicketById = (id: string) => {
  return useQuery({
    queryFn: () => getTicketById(id),
    queryKey: ["tickets" , id],
  });
};
