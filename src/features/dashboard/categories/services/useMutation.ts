import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, deleteCategory, editCategory } from "./actions";
import { toast } from "sonner";
import { CategoryFormValues } from "../types/schema";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CategoryFormValues) => {
      await createCategory(data);
    },
    onSuccess: () => {
      (queryClient.invalidateQueries({ queryKey: ["category"] }),
        toast.success("New category created successfully"));
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await deleteCategory(id);
    },
    onSuccess: () => {
      (queryClient.invalidateQueries({ queryKey: ["category"] }),
        toast.success("Category deleted successfully!"));
    },
  });
};

export const useEditCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: CategoryFormValues;
    }) => {
      await editCategory(id, data);
    },
    onSuccess: () => {
      (queryClient.invalidateQueries({ queryKey: ["category"] }),
        toast.success("Category edited successfully!"));
    },
  });
};
