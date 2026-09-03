"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewProduct, deleteProduct, updateProduct } from "./actions";
import { toast } from "sonner";
import { id } from "zod/v4/locales";
import { ProductFormValues } from "../types/schema";
import { useRouter } from "next/navigation";

export const useCreateNewProduct = () => {
  // const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["products"] });
      router.refresh();
      toast.success("New product created successfully");
    },
  });
};

export const useDeleteProduct = () => {
  // const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["products"] });
      router.refresh();
      toast.success("Product deleted successfully");
    },
  });
};

export const useUpdateProduct = () => {
  // const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductFormValues }) =>
      updateProduct(id, data),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["products"] });
      router.refresh();
      toast.success("Product updated successfully");
    },
  });
};
