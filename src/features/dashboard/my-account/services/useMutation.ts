import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyAccount } from "./actions";
import { toast } from "sonner";
import { UpdateMyAccountData } from "../types/schema";

export const useUpdateMyAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      email,
      userName,
      password,
    }: UpdateMyAccountData) => {
      return await updateMyAccount({
        email,
        password,
        userName,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      toast.success("User updated successfully!");
    },
    onError: (err) => {
      toast.error("error" + err);
    },
  });
};
