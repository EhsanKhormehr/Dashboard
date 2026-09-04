"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createNewBrand,
  createNewProduct,
  deleteBrand,
  deleteProduct,
  updateBrand,
  updateProduct,
} from "./actions";
import { toast } from "sonner";
import { id } from "zod/v4/locales";
import { NewBrandFormValues, ProductFormValues } from "../types/schema";
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

// Brand
export const useCreateNewBrand = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: createNewBrand,
    onSuccess: () => {
      router.refresh();
      toast.success("Brand created successfully!");
    },
  });
};

export const useUpdateBrand = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: NewBrandFormValues }) =>
      updateBrand(id, data),
    onSuccess : ()=>{
      router.refresh()
      toast.success("Brand updated successfully!")
    }
  });
};

export const useDeleteBrand = ()=>{
  const router = useRouter()
  return useMutation({
    mutationFn : deleteBrand,
    onSuccess : ()=> {
      router.refresh()
      toast.success("Brand deleted successfully!")
    }
  })
}
