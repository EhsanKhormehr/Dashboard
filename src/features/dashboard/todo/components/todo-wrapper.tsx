"use client";
import React from "react";
import TodoCard from "./todo-card";
import { useGetTodos } from "../services/useQueries";

export default function TodoWrapper() {
  const { data } = useGetTodos();
  return (
    <div className="mt-6 grid gap-6">
      {data?.map((todo) => (
        <TodoCard key={todo.id} title={todo.title} id={todo.id} isFavorite={todo.isFavorite} />
      ))}
    </div>
  );
}
