"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeamMember } from "./actions";
import { toast } from "sonner";

export const useCreateTeamMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTeamMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
      toast.success("New Team Member Created Successfully!");
    },
  });
};
