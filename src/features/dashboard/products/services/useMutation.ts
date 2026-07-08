"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProduct, deleteProduct } from "./actions";
import { toast } from "sonner";

export const useCreateNewProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("New product created successfully");
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully");
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    },
  });
};
