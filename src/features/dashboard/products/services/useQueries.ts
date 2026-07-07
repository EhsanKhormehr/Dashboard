import { useQuery } from "@tanstack/react-query";
import { getCategoryAttributes, getFilteredProducts } from "./actions";

type getFilteredProductsParams = {
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
    queryKey: ["category-attributes"],
    queryFn: () => getCategoryAttributes(id!),
    enabled: !!id,
  });
};

export const useFilteredProducts = (params: getFilteredProductsParams) => {
  return useQuery({
    queryKey: [
      "products",
      params.q ?? "",
      params.sortBy ?? "",
      params.category ?? "",
      params.page ?? "",
      params.limit ?? "",
      params.minPrice ?? "",
      params.maxPrice ?? "",
    ],
    queryFn: () => getFilteredProducts(params),
  });
};
