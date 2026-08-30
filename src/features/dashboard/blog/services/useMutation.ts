"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createBlog,
  createBlogTag,
  deleteBlog,
  deleteBlogTag,
  updateBlog,
  updateBlogCommentStatus,
  updateBlogTag,
} from "./actions";
import { useRouter } from "next/navigation";
import { BlogFormValues, TagFormValues } from "../types/schema";
import { CommentStatus } from "../../../../../generated/prisma/enums";

type EditBlogVaribles = {
  id: string;
  data: BlogFormValues;
};

type EditBlogTagVaribles = {
  id: string;
  data: TagFormValues;
};

type UpdateBlogCommentStatusVaribles = {
  id: string;
  status: CommentStatus;
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

export const useCreateBlogTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlogTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogtag"] });
      toast.success("Tag created successfully!");
    },
  });
};

export const useDeleteBlogTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlogTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogtag"] });
      toast.success("Tag deleted successfully");
    },
  });
};

export const useUpdateBlogTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: EditBlogTagVaribles) => updateBlogTag(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogtag"] });
      toast.success("Tag updated successfully!");
    },
  });
};

export const useUpdateBlogCommentStatus = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ id, status }: UpdateBlogCommentStatusVaribles) =>
      updateBlogCommentStatus(id, status),
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
