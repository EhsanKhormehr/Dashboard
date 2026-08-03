"use client";

import { useQuery } from "@tanstack/react-query";
import { getTicketById } from "./actions";

export const useGetTicketById = (id: string) => {
  return useQuery({
    queryFn: () => getTicketById(id),
    queryKey: ["tickets"],
  });
};
