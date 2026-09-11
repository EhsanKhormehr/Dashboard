"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  changeProductCommentStatus,
  createDiscountCode,
  createNewBrand,
  createNewProduct,
  deleteBrand,
  deleteDiscountCode,
  deleteProduct,
  toggleDiscountCodeActive,
  updateBrand,
  updateDiscountCode,
  updateProduct,
} from "./actions";
import { toast } from "sonner";
import { id } from "zod/v4/locales";
import {
  DiscountCodeFormValues,
  NewBrandFormValues,
  ProductFormValues,
} from "../types/schema";
import { useRouter } from "next/navigation";
import { CommentStatus } from "../../../../../generated/prisma/enums";

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
    onSuccess: () => {
      router.refresh();
      toast.success("Brand updated successfully!");
    },
  });
};

export const useDeleteBrand = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: deleteBrand,
    onSuccess: () => {
      router.refresh();
      toast.success("Brand deleted successfully!");
    },
  });
};

// Comments
export const useChangeProductCommentStatus = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: CommentStatus }) =>
      changeProductCommentStatus(id, status),
    onSuccess: (_data, variables) => {
      if (variables.status === "APPROVED") {
        toast.success("Comment confirmed successfully!");
      }
      if (variables.status === "REJECTED") {
        toast.error("Comment rejected successfully!");
      }
      router.refresh();
    },
  });
};

// Discount code
export const useCreateDiscountCode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDiscountCode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discount"] });
      toast.success("Discount code created successfully!");
    },
  });
};

export const useToggleDiscountCodeActive = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      toggleDiscountCodeActive(id, isActive),
    onSuccess: (_, varibales) => {
      router.refresh();
      if (varibales.isActive === true) {
        toast.success("Discount code activated successfully!");
      } else {
        toast.success("Discount code disabled successfully!");
      }
    },
  });
};

export const useDeleteDiscountCode = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: deleteDiscountCode,
    onSuccess: () => {
      router.refresh();
      toast.success("Discount code deleted successfully!");
    },
  });
};

export const useUpdateDiscountCode = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: DiscountCodeFormValues }) =>
      updateDiscountCode(id, data),
    onSuccess: () => {
      router.refresh();
      toast.success("Discount code updated successfully!");
    },
  });
};
