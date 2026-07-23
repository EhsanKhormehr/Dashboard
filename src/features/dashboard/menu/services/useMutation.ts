"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMenu, deleteMenu } from "./actions";
import { toast } from "sonner";

export const useCreateMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] });
      toast.success("Menu created successfully");
    },
  });
};

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] });
      toast.success("Menu deleted successfully");
    },
  });
};
