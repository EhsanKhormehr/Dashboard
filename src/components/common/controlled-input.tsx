import React from "react";
import { Field, FieldLabel } from "../ui/field";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import ErrorMessage from "./error-message";
import { ComponentProps } from "react";

type ControlledInputProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
} & ComponentProps<"input">;

const ControlledInput = <T extends FieldValues>({
  name,
  type,
  label,
  className,
  ...props
}: ControlledInputProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <Field>
      {label && <FieldLabel>{label}</FieldLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              type={type}
              id={name}
              className={className}
              {...field}
              {...props}
            />
            {error && <ErrorMessage text={error.message} />}
          </>
        )}
      />
    </Field>
  );
};

export default ControlledInput;
