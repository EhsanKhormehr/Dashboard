"use client";

import { useQuery } from "@tanstack/react-query";
import { getTicketById, getTickets } from "./actions";
import { TicketCategory, TicketStatus } from "../../../../../generated/prisma/enums";

type useGetTicketsVaribles = {
  search?: string;
  status?: TicketStatus | "DEFAULT";
  category?: TicketCategory | "DEFAULT";
  perPage?: string;
  page?: string;
};

export const useGetTickets = (params: useGetTicketsVaribles) => {
  return useQuery({
    queryFn: () => getTickets(params),
    queryKey: ["tickets"],
  });
};

export const useGetTicketById = (id: string) => {
  return useQuery({
    queryFn: () => getTicketById(id),
    queryKey: ["tickets", id],
  });
};
