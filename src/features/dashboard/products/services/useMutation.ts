import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductFormValues } from "../types/schema";
import { createNewProduct, deleteProduct } from "./actions";
import { toast } from "sonner";

export const useCreateNewProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ProductFormValues) => {
      return createNewProduct(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("New product created successfuly");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfuly");
    },
  });
};
