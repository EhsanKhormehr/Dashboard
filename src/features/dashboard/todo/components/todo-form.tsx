"use client";
import ErrorMessage from "@/components/common/error-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, {  useState } from "react";
import { useCreateTodo } from "../services/useMutation";

export default function TodoForm() {
  const [todoName, setTodoName] = useState<string>("");
  const [isSubmitted, setIsSubmited] = useState<boolean>(false);

  const {mutate : createTodo} = useCreateTodo()

  const createTodoHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmited(true);
    if (!todoName.trim()) return;
    const todoObj = {title : todoName}
    createTodo(todoObj ,{
      onSuccess : ()=>{
        setTodoName("")
        setIsSubmited(false)
      }
    })
  };
  
  return (
    <div className="mt-6 border-1 rounded-xl bg-surface p-8">
      <form onSubmit={(e) => createTodoHandler(e)} autoComplete="off">
        <div className="flex">
          <div className="w-full max-w-[400px]">
            <Input
              placeholder="Write Your task name here"
              className="w-full py-4.5 mb-1"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
            {isSubmitted && !todoName.trim() && (
              <ErrorMessage text="This field is required!" />
            )}
          </div>
          <Button type="submit" className="py-4.5 ml-4 cursor-pointer">
            Add Todo
          </Button>
        </div>
      </form>
    </div>
  );
}
