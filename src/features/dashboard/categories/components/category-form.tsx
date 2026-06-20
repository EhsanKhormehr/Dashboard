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
import CategoryBasicFields from "@/features/dashboard/categories/components/category-basic-fields";
import CategoryTable from "./category-table";
import {
  useCreateCategory,
  useEditCategory,
} from "@/features/dashboard/categories/services/useMutation";

type CategoryFormProps = {
  mode: "create" | "edit";
  initialData?: CategoryFormValues;
  categoryId?: string;
};

export default function CategoryForm({
  mode,
  initialData,
  categoryId,
}: CategoryFormProps) {

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialData ?? categoryDefaultValues,
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

  const { mutate: createCategory, isPending: isCreating } = useCreateCategory();
  const { mutate: editCategory, isPending: isEditing } = useEditCategory();

  const onSubmit = (data: CategoryFormValues) => {
    if (mode === "create") {
      createCategory(data);
    }

    if (!categoryId) return;

    if (mode === "edit") {
      editCategory({ id: categoryId, data });
    }
  };

  const isPending = mode === "create" ? isCreating : isEditing;
  
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CategoryBasicFields />

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
            <CategoryTable fields={fields} remove={remove} />
            <Button
              type="submit"
              className="cursor-pointer py-4.5 font-semibold mt-5"
              disabled={isCreating || isEditing}
            >
              {isPending
                ? mode === "create"
                  ? "Creating..."
                  : "Saving..."
                : mode === "create"
                  ? "Create category"
                  : "Save changes"}

              <Plus className="size-5" />
            </Button>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}
