import React from "react";
import { Field, FieldLabel } from "../ui/field";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import ErrorMessage from "./error-message";
import { ComponentProps } from "react";
import PasswordInput from "./password-input";
import { cn } from "@/lib/utils";

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
      {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            {type === "password" ? (
              <PasswordInput id={name} className={className} {...field} {...props} />
            ) : (
              <Input
                type={type}
                id={name}
                className={cn(className , "")}
                {...field}
                {...props}
              />
            )}
            {error && <ErrorMessage text={error.message} />}
          </>
        )}
      />
    </Field>
  );
};

export default ControlledInput;
