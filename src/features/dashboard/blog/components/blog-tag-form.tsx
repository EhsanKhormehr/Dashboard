"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Plus } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import React from "react";
import {
  newTagSchema,
  tagFormDefaultValues,
  TagFormValues,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledInput from "@/components/common/controlled-input";
import { useCreateBlogTag, useUpdateBlogTag } from "../services/useMutation";
import { BlogTagGetPayload } from "../../../../../generated/prisma/models";

type BlogTagFormProps = {
  mode: "create" | "edit";
  blogTagId?: string;
  initialData?: BlogTagGetPayload<{}> | null;
};

const BlogTagForm = ({ mode, initialData, blogTagId }: BlogTagFormProps) => {
  const form = useForm<TagFormValues>({
    defaultValues: initialData ?? tagFormDefaultValues,
    resolver: zodResolver(newTagSchema),
  });
  const { handleSubmit } = form;
  const { mutate: createBlogTag } = useCreateBlogTag();
  const { mutate: updateBlogTag } = useUpdateBlogTag();
  const newTagSubmitHandler = (data: TagFormValues) => {
    if (mode === "create") {
      createBlogTag(data);
    }
    if (mode === "edit") {
      if (!initialData) {
        return <p>Tag not found!</p>;
      }
      if (!blogTagId) {
        throw new Error("Blog tag ID is required");
      }
      updateBlogTag({ id: blogTagId, data });
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(newTagSubmitHandler)}>
        <FieldGroup className="grid grid-cols-2 gap-8">
          <ControlledInput<TagFormValues>
            name="name"
            label="Name"
            placeholder="Please enter tag name"
          />
          <ControlledInput<TagFormValues>
            name="slug"
            label="Slug"
            placeholder="Please enter tag slug"
          />
        </FieldGroup>
        <FieldGroup className="mt-6">
          <Field orientation={"horizontal"}>
            <Button type="submit" className="py-4.5 cursor-pointer">
              {mode === "create" && <Plus />}
              {mode === "create" ? "Create" : "Update"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </FormProvider>
  );
};

export default BlogTagForm;
