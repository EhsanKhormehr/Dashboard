import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTodoInput } from "../types/todo";
import { createTodo, deleteTodo, toggleTodoFavorite } from "./actions";
import { toast } from "sonner";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateTodoInput) => {
      return createTodo(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo created successfuly");
    },
  });
};

export const useToggleFavoriteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      isFavorite,
    }: {
      id: string;
      isFavorite: boolean;
    }) => {
      toggleTodoFavorite(id, isFavorite);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return deleteTodo(id);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo deleted successfuly!");
    },
  });
};
