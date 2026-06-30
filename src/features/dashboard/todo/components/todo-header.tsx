"use client";
import PageHeader from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import TodoForm from "./todo-form";

export default function TodoHeader() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(true);

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeader title="To-Do List" />
        <Button
          type="button"
          className="text-sm font-bold px-8 py-5.5 cursor-pointer"
          onClick={()=>setIsFormOpen((prev)=>!prev)}
        >
          {isFormOpen ? "Cancle" : "Add New Task"}
        </Button>
      </div>
      {isFormOpen && <TodoForm />}
    </>
  );
}
