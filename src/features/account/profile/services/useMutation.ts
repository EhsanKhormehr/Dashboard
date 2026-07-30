"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserInfo } from "./actions";
import { toast } from "sonner";

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User info updated successfully!");
    },
    onError: (err) => {
      console.log("Error" + err);
    },
  });
};
