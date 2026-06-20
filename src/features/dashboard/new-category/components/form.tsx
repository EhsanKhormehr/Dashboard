"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import {
  categoryDefaultValues,
  CategoryFormValues,
  categorySchema,
} from "../types/schema";
import NewCategoryBasicFields from "./basic-fields";
import NewCategoryTable from "./table";
import { useCreateCategory } from "../services/useMutation";

export default function NewCategoryForm() {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: categoryDefaultValues,
    mode: "onChange",
  });

  const { control, handleSubmit } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "attributes",
  });

  const addAttribute = () => {
    append({
      name: "",
      slug: "",
      type: "TEXT",
      required: "FALSE",
      options: "",
    });
  };
  const { mutate , isPending} = useCreateCategory()
  const onSubmit = (data: CategoryFormValues) => {

    mutate(data)
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NewCategoryBasicFields />

        <Card className="shadow-card mt-6">
          <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
            <CardTitle className="font-bold text-2xl">Attributes</CardTitle>
            <Button
              type="button"
              className="cursor-pointer py-4.5 font-semibold"
              onClick={addAttribute}
            >
              Add Field
              <Plus className="size-5" />
            </Button>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <NewCategoryTable fields={fields} remove={remove} />
            <Button
              type="submit"
              className="cursor-pointer py-4.5 font-semibold mt-5"
              disabled={isPending}
            >
              {isPending ? "Creating..." : "Create category"}
              
              <Plus className="size-5" />
            </Button>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}
