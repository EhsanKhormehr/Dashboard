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
        <Controller
          control={control}
          name={`attributes.${index}.name`}
          render={({ field }) => (
            <Input placeholder="Name" className="!bg-surface" {...field} />
          )}
        />
        {errors.attributes?.[index]?.name && (
          <p className="text-destructive text-sm">
            {errors.attributes?.[index].name?.message}
          </p>
        )}
      </TableCell>
      <TableCell className="min-w-[300px]">
        <Controller
          control={control}
          name={`attributes.${index}.slug`}
          render={({ field }) => (
            <Input placeholder="Slug" className="!bg-surface" {...field} />
          )}
        />
        {errors.attributes?.[index]?.slug && (
          <p className="text-destructive text-sm">
            {errors.attributes?.[index].slug?.message}
          </p>
        )}
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
          <p className="text-destructive text-sm">
            {errors.attributes?.[index].type?.message}
          </p>
        )}
      </TableCell>
      <TableCell>
        <Controller
          control={control}
          name={`attributes.${index}.required`}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={(value) => {
                field.onChange(value);
              }}
            >
              <SelectTrigger className="!bg-surface">
                <SelectValue placeholder="Required"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="TRUE">True</SelectItem>
                  <SelectItem value="FALSE">False</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.attributes?.[index]?.required && (
          <p className="text-destructive text-sm">
            {errors.attributes?.[index].required?.message}
          </p>
        )}
      </TableCell>
      <TableCell className="min-w-[300px]">
        <Controller
          control={control}
          name={`attributes.${index}.options`}
          render={({ field }) => (
            <Input
              placeholder="Options"
              className="!bg-surface"
              {...field}
              value={field.value ?? ""}
              disabled={selectedType !== "SELECT"}
            />
          )}
        />
        {errors.attributes?.[index]?.options && (
          <p className="text-destructive text-sm">
            {errors.attributes?.[index].options?.message}
          </p>
        )}
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
