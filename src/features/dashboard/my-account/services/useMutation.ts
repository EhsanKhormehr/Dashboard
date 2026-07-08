"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyAccount } from "./actions";
import { toast } from "sonner";

export const useUpdateMyAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMyAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      toast.success("User updated successfully!");
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    },
  });
};
