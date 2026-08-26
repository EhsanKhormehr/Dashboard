"use client";

import { useQuery } from "@tanstack/react-query";
import { getArticles } from "./actions";

type GetArticlesVaribles = {
  search?: string;
  sortBy?: string;
};

export const useGetArticles = (params: GetArticlesVaribles) => {

  return useQuery({
    queryFn: () => getArticles(params),
    queryKey: ["blog"],
  });
};
