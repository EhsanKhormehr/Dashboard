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
import { useCreateBlogTag } from "../services/useMutation";

const BlogTagForm = () => {
  const form = useForm<TagFormValues>({
    defaultValues: tagFormDefaultValues,
    resolver: zodResolver(newTagSchema),
  });
  const { handleSubmit } = form;
  const { mutate } = useCreateBlogTag();
  const newTagSubmitHandler = (data: TagFormValues) => {
    mutate(data);
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
              <Plus />
              Create Tag
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </FormProvider>
  );
};

export default BlogTagForm;
