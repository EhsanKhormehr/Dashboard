"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getLatestArticles, submitArticleComment } from "./actions";
import { toast } from "sonner";

type SubmitArticleCommentVaribles = {
  content: string;
  blogId: string;
  userId: string;
};

export const useGetLatestArticles = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: getLatestArticles,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });
};

export const useSubmitArticleComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ content, blogId, userId }: SubmitArticleCommentVaribles) =>
      submitArticleComment(content, blogId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
      toast.success(
        "Comment submitted successfully. It will be displayed after approval by an administrator.",
      );
    },
  });
};
