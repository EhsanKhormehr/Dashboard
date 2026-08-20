"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "./actions";

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: getBlogs,
  });
};
