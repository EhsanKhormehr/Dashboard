import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./actions";

export const useCategories = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
};
