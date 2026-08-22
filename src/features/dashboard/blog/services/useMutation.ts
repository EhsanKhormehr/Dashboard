"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createBlog, deleteBlog, updateBlog } from "./actions";
import { useRouter } from "next/navigation";
import { BlogFormValues } from "../types/schema";

type EditBlogVaribles = {
  id: string;
  data: BlogFormValues;
};

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
  const router = useRouter();

  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      router.refresh();
      toast.success("Blog deleted successfully!");
    },
  });
};

export const useUpdateBlog = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ id, data }: EditBlogVaribles) => updateBlog(id, data),
    onSuccess: () => {
      router.refresh();
      toast.success("Blog updated successfully!");
    },
  });
};
