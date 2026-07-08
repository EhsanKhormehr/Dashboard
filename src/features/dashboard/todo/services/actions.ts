"use server";

import { executeAction } from "@/lib/executeAction";
import { CreateTodoInput } from "../types/todo";
import { prisma } from "@/lib/prisma";

export const createTodo = async (data: CreateTodoInput) => {
  return executeAction({
    actionFn: async () => {
      return prisma.todo.create({
        data: {
          title: data.title,
        },
      });
    },
  });
};

export const getAllTodos = async () => {
  return executeAction({
    actionFn: () => {
      return prisma.todo.findMany({
        orderBy: {
          createdAt: "asc",
        },
      });
    },
  });
};

export const toggleTodoFavorite = async (id: string, isFavorite: boolean) => {
  return executeAction({
    actionFn: () => {
      return prisma.todo.update({
        where: {
          id,
        },
        data: {
          isFavorite: !isFavorite,
        },
      });
    },
  });
};

export const deleteTodo = async (id: string) => {
  return executeAction({
    actionFn: () => {
      return prisma.todo.delete({
        where: {
          id,
        },
      });
    },
  });
};
