"use client";
import { CircleX, Star } from "lucide-react";
import React from "react";
import { useDeleteTodo, useToggleFavoriteTodo } from "../services/useMutation";
import ConfirmDialog from "@/components/common/confirm-dialog";

type TodoCardProps = {
  id: string;
  title: string;
  isFavorite: boolean;
};

export default function TodoCard({
  id,
  title,
  isFavorite,
}: TodoCardProps) {
  const { mutate: toggleFavorite } = useToggleFavoriteTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const toggleFavoriteHandler = () => {
    toggleFavorite({ id, isFavorite });
  };

  const deleteTodoHandler = () => {
    deleteTodo(id);
  };

  return (
    <div className="border-1 rounded-xl bg-surface p-8 flex items-center justify-between cursor-pointer">
      <div>
        <span className="font-semibold">{title}</span>
      </div>
      <div className="flex items-center">
        <Star
          strokeWidth={1}
          size={30}
          className={`text-dashboard-text/50 mr-5 ${isFavorite && "fill-[#FFD56D] stroke-[#FFD56D]"} `}
          onClick={toggleFavoriteHandler}
        />
        <ConfirmDialog
          title="Are you sure to delete this todo?"
          trigger={
            <CircleX
              strokeWidth={1}
              size={30}
              className="text-dashboard-text/50 hover:stroke-destructive"
            />
          }
          cancelText="cancel"
          confirmText="Delete"
          onConfirm={deleteTodoHandler}
          confirmVariant="destructive"
        />
      </div>
    </div>
  );
}
