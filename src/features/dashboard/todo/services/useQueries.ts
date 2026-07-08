"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "./actions";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });
};
