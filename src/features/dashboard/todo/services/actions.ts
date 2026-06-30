"use server";

import { executeAction } from "@/lib/executeAction";
import { CreateTodoInput } from "../types/todo";
import { prisma } from "@/lib/prisma";

export const createTodo = async (data: CreateTodoInput) => {
  return await executeAction({
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
  return await prisma.todo.findMany({
    orderBy : {
        createdAt : "asc"
    }
  });
};

export const toggleTodoFavorite = async (id: string, isFavorite: boolean) => {
  return await executeAction({
    actionFn: async () => {
      const updatedTodo = prisma.todo.update({
        where: {
          id,
        },
        data: {
          isFavorite: !isFavorite,
        },
      });
      return updatedTodo;
    },
  });
};

export const deleteTodo = async(id: string)=>{
    return await executeAction({
        actionFn: async()=>{
            return await prisma.todo.delete({
                where : {
                    id
                }
            })
        }
    })
}