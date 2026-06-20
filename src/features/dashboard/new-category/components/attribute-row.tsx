import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Controller,

  useFormContext,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { CategoryFormValues } from "../types/schema";
import DeleteAttributeDialog from "./delete-attribute-dialog";

type NewCategoryAttributeRowProps = {
  index: number;
  onRemove: () => void;
};
export default function NewCategoryAttributeRow({
  index,
  onRemove,
}: NewCategoryAttributeRowProps) {
  const {
    control,
    setValue,
    formState: { errors },
    watch
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
        <DeleteAttributeDialog onConfirm={onRemove}/> 
      </TableCell>
    </TableRow>
  );    
}
