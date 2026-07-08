"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, deleteCategory, editCategory } from "./actions";
import { toast } from "sonner";
import { CategoryFormValues } from "../types/schema";

type EditCategoryVariables = {
  id: string;
  data: CategoryFormValues;
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("New category created successfully");
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category deleted successfully!");
    },
  });
};

export const useEditCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: EditCategoryVariables) => {
      return editCategory(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category edited successfully!");
    },
  });
};
