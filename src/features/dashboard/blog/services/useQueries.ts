"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogs, getBlogTags } from "./actions";
import { BlogStatus } from "../../../../../generated/prisma/enums";

type GetBlogsVariables = {
  search?: string;
  category?: string;
  status?: BlogStatus | "DEFAULT";
  perPage?: string;
  page?: string;
};
export const useGetBlogs = (params: GetBlogsVariables) => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: () => getBlogs(params),
  });
};

export const useGetBlogTags = () => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: getBlogTags,
  });
};
