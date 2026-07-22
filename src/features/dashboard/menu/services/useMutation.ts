"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMenu } from "./actions";
import { toast } from "sonner";

export const useCreateMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] });
      toast.success("Menu created successfully")
    },
  });
};
