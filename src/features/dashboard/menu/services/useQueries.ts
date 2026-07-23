"use client";

import { useQuery } from "@tanstack/react-query";
import { getMenus } from "./actions";

export const useGetMenus = () => {
  return useQuery({
    queryKey: ["menu"],
    queryFn: getMenus,
  });
};
