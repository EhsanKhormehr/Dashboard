"use client";
import { useQuery } from "@tanstack/react-query";
import { getCategoryAttributes, getFilteredProducts } from "./actions";

type GetFilteredProductsParams = {
  q?: string;
  sortBy?: string;
  category?: string;
  page?: string;
  limit?: string;
  minPrice?: string;
  maxPrice?: string;
};

export const useCategoryAttributes = (id?: string) => {
  return useQuery({
    queryKey: ["category-attributes", id],
    queryFn: () => getCategoryAttributes(id!),
    enabled: !!id,
  });
};

export const useFilteredProducts = (params: GetFilteredProductsParams) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getFilteredProducts(params),
  });
};
