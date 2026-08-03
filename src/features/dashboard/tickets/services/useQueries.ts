"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllTickets, getTicketById } from "./actions";
import {
  TicketCategory,
  TicketStatus,
} from "../../../../../generated/prisma/enums";

type useGetTicketsVaribles = {
  search?: string;
  status?: TicketStatus | "DEFAULT";
  category?: TicketCategory | "DEFAULT";
  perPage?: string;
  page?: string;
};

export const useGetTicketById = (id: string) => {
  return useQuery({
    queryFn: () => getTicketById(id),
    queryKey: ["tickets"],
  });
};

export const useGetTickets = (params: useGetTicketsVaribles) => {
  return useQuery({
    queryFn: () => getAllTickets(params),
    queryKey: ["tickets"],
  });
};
