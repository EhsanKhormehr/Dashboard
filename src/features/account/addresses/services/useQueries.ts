"use client";

import { useQuery } from "@tanstack/react-query";
import { getAddresses } from "./actions";

export const useGetAddresses = () => {
  return useQuery({
    queryKey: ["address"],
    queryFn: getAddresses,
  });
};
