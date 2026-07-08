"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTodoInput } from "../types/todo";
import { createTodo, deleteTodo, toggleTodoFavorite } from "./actions";
import { toast } from "sonner";

type ToggleFavoriteTodoVariables = {
  id: string;
  isFavorite: boolean;
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo created successfuly");
    },
  });
};

export const useToggleFavoriteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, isFavorite }: ToggleFavoriteTodoVariables) => {
      return toggleTodoFavorite(id, isFavorite);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo deleted successfully!");
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    },
  });
};
