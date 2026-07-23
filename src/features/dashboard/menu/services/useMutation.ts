"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMenu, deleteMenu, updateMenu } from "./actions";
import { toast } from "sonner";
import { MenuFormValue } from "../types/schema";

type UpdateMenuVaribles = {
  id: string;
  data: MenuFormValue;
};

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
    mutationFn: (id: string) => deleteMenu(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] });
      toast.success("Menu deleted successfully");
    },
  });
};

export const useUpdateMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateMenuVaribles) => {
      return updateMenu(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] });
      toast.success("Menu Updated successfully");
    },
  });
};
