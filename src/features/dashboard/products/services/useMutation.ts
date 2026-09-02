"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProduct, deleteProduct, updateProduct } from "./actions";
import { toast } from "sonner";
import { id } from "zod/v4/locales";
import { ProductFormValues } from "../types/schema";

export const useCreateNewProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("New product created successfully");
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
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductFormValues }) =>
      updateProduct(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully");
    },
  });
};
