"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createBlog, deleteBlog } from "./actions";
import { useRouter } from "next/navigation";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
      toast.success("Blog created successfully!");
    },
  });
};

export const useDeleteBlog = () => {
  const router = useRouter()
  
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      router.refresh()
      toast.success("Blog deleted successfully!");
    },
  });
};
