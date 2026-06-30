import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "./actions";

export const useGetTodos =  () => {
  return useQuery({
    queryFn: getAllTodos,
    queryKey: ["todos"],
  });
};
