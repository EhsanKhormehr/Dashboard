import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { CategoryFormValues } from "../types/schema";

import ConfirmDialog from "@/components/common/confirm-dialog";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ErrorMessage from "@/components/common/error-message";
import ControlledInput from "@/components/common/controlled-input";

type CategoryAttributeRowProps = {
  index: number;
  onRemove: () => void;
};

export default function CategoryAttributeRow({
  index,
  onRemove,
}: CategoryAttributeRowProps) {
  const {
    control,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext<CategoryFormValues>();

  const attributes = watch("attributes");
  const selectedType = attributes?.[index]?.type;

  return (
    <TableRow>
      <TableCell className="h-18 min-w-[300px]">
        <ControlledInput<CategoryFormValues>
          name={`attributes.${index}.name`}
          type="text"
          placeholder="Name"
          className="!bg-surface"
        />
      </TableCell>
      <TableCell className="min-w-[300px]">
        <ControlledInput<CategoryFormValues>
          name={`attributes.${index}.slug`}
          type="text"
          placeholder="Slug"
          className="!bg-surface"
        />
      </TableCell>
      <TableCell>
        <Controller
          control={control}
          name={`attributes.${index}.type`}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={(value) => {
                field.onChange(value);

                if (value !== "SELECT") {
                  setValue(`attributes.${index}.options`, "");
                }
              }}
            >
              <SelectTrigger className="!bg-surface">
                <SelectValue placeholder="Type"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="TEXT">Text</SelectItem>
                  <SelectItem value="NUMBER">Number</SelectItem>
                  <SelectItem value="BOOLEAN">Boolean</SelectItem>
                  <SelectItem value="SELECT">Select</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.attributes?.[index]?.type && (
          <ErrorMessage text={errors.attributes?.[index].type?.message} />
        )}
      </TableCell>
      <TableCell>
        <Controller
          control={control}
          name={`attributes.${index}.required`}
          render={({ field }) => (
            <>
              <Checkbox
                checked={field.value === true}
                onCheckedChange={(value) => {
                  field.onChange(value === true);
                }}
              />
            </>
          )}
        />
        {errors.attributes?.[index]?.required && (
          <ErrorMessage text={errors.attributes?.[index].required?.message} />
        )}
      </TableCell>
      <TableCell className="min-w-[300px]">
        <ControlledInput<CategoryFormValues>
          name={`attributes.${index}.options`}
          type="text"
          className="!bg-surface"
          placeholder="Options"
          disabled={selectedType !== "SELECT"}
        />
      </TableCell>
      <TableCell>
        <ConfirmDialog
          trigger={
            <Button
              type="button"
              variant={"destructive"}
              className="cursor-pointer"
            >
              <Trash2 />
              Delete
            </Button>
          }
          title="Are you sure to delete this field?"
          cancelText="Cancel"
          confirmText="Delete"
          onConfirm={onRemove}
          confirmVariant="destructive"
        />
      </TableCell>
    </TableRow>
  );
}
