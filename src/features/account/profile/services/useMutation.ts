"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword, updateUserInfo } from "./actions";
import { toast } from "sonner";

type UpdatePasswordVariables = {
  currentPassword: string;
  newPassword: string;
};

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User info updated successfully!");
    },
  });
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ currentPassword, newPassword }: UpdatePasswordVariables) =>
      updatePassword(currentPassword, newPassword),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Password updated successfully!");
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    },
  });
};
