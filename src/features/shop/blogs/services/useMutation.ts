"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getLatestArticles } from "./actions";

export const useGetLatestArticles = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: getLatestArticles,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });
};
