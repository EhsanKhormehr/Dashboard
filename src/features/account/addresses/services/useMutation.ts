"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createAddress,
  deleteAddress,
  makeAddressDefault,
  updateAddress,
} from "./actions";
import { toast } from "sonner";
import { AddressFormValue } from "../types/schema";

export const useCreateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Address created successfully!");
    },
     onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    },
  });
};

export const useMakeAddressDefault = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: makeAddressDefault,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Default address updated successfully!");
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    },
  });
};

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Address deleted successfully!");
    },
     onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    },
  });
};

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: AddressFormValue }) =>
      updateAddress(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("Address Updated successfully!");
    },
     onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    },
  });
};
