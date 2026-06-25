import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import { CategoryFormValues } from "../types/schema";
import ErrorMessage from "@/components/common/error-message";

export default function CategoryBasicFields() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CategoryFormValues>();
  return (
    <FieldGroup>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Name"
              className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
              {...field}
            />
          )}
        />
        {errors.name && <ErrorMessage text={errors.name.message} />}
      </Field>
      <Field>
        <FieldLabel>Slug</FieldLabel>
        <Controller
          control={control}
          name="slug"
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Slug"
              className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
              {...field}
            />
          )}
        />
        {errors.slug && <ErrorMessage text={errors.slug.message} />}
      </Field>
    </FieldGroup>
  );
}
