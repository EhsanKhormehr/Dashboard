import { useQuery } from "@tanstack/react-query";
import { getCategoryAttributes } from "./actions";

export const useCategoryAttributes = (id?: string) => {
  return useQuery({
    queryKey: ["category-attributes"],
    queryFn: () => getCategoryAttributes(id!),
    enabled: !!id,
  });
};
