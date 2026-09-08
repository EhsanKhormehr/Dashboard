"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitProductReview } from "./actions";
import { toast } from "sonner";

type UseSubmitProductReviewVariables = {
  content: string;
  productId: string;
  rate: number;
  userId: string;
};

export const useSubmitProductReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      content,
      productId,
      userId,
      rate,
    }: UseSubmitProductReviewVariables) =>
      submitProductReview(content, productId, userId, rate),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.success(
        "Comment submitted successfully. It will be displayed after approval by an administrator.",
      );
    },
  });
};
