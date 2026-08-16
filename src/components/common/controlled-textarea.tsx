import React, { ComponentProps } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Field, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import ErrorMessage from "./error-message";

type ControlledTextareaProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
} & ComponentProps<"textarea">;

const ControlledTextarea = <T extends FieldValues>({
  name,
  label,
  className,
  ...props
}: ControlledTextareaProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <Field>
      {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Textarea
              {...props}
              {...field}
              id={name}
              value={field.value ?? ""}
              disabled={props.disabled}
            />
            {error && <ErrorMessage text={error.message} />}
          </>
        )}
      />
    </Field>
  );
};

export default ControlledTextarea;
