"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "./actions";

export const useGetProductBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProductBySlug(slug),
  });
};
