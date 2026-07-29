"use client"
import { useQuery } from "@tanstack/react-query";

export const useMeQuery = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await fetch("/api/auth/me");

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to get current user");
      }
      return data;
    },
  });
};
