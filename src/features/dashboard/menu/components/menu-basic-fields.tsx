"use client";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MenuFormValue } from "../types/schema";
import ErrorMessage from "@/components/common/error-message";

const MenuBasicFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<MenuFormValue>();
  return (
    <FieldGroup>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
              placeholder="Name"
              type="text"
              {...field}
            />
          )}
        />
        {errors.name && <ErrorMessage text={errors.name.message} />}
        <FieldLabel>Href</FieldLabel>
        <Controller
          control={control}
          name="href"
          render={({ field }) => (
            <Input
              className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
              placeholder="Href"
              type="text"
              {...field}
            />
          )}
        />
        {errors.href && <ErrorMessage text={errors.href.message} />}
      </Field>
    </FieldGroup>
  );
};

export default MenuBasicFields;
