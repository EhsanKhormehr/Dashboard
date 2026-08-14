import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import { CategoryFormValues } from "../types/schema";
import ErrorMessage from "@/components/common/error-message";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  CategoryIconName,
  categoryIconOptions,
  categoryIcons,
} from "@/lib/categoryIcons";
import ControlledInput from "@/components/common/controlled-input";

export default function CategoryBasicFields() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CategoryFormValues>();
  return (
    <FieldGroup>
      <ControlledInput<CategoryFormValues>
        name={"name"}
        label="Name"
        type="text"
        className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
        placeholder="Name"
      />
      <ControlledInput<CategoryFormValues>
        name="slug"
        label="Slug"
        type="text"
        placeholder="Slug"
        className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
      />
      <Field>
        <FieldLabel>Icon</FieldLabel>
        <Controller
          control={control}
          name="icon"
          render={({ field }) => (
            <Combobox
              items={categoryIconOptions}
              value={field.value}
              onValueChange={field.onChange}
            >
              <ComboboxInput
                placeholder="Select a Icon"
                className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
              />
              <ComboboxContent>
                <ComboboxEmpty>No Icons Found.</ComboboxEmpty>
                <ComboboxList>
                  {(icon) => {
                    const iconName = icon as CategoryIconName;
                    const Icon = categoryIcons[iconName];

                    return (
                      <ComboboxItem
                        key={icon}
                        value={icon}
                        className="flex justify-between"
                      >
                        <span>{icon}</span>
                        <Icon />
                      </ComboboxItem>
                    );
                  }}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          )}
        />
        {errors.icon && <ErrorMessage text={errors.icon.message} />}
      </Field>
    </FieldGroup>
  );
}
