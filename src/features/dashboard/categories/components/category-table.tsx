import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FieldArrayWithId, UseFieldArrayRemove } from "react-hook-form";
import React from "react";
import { CategoryFormValues } from "../types/schema";
import CategoryAttributeRow from "@/features/dashboard/categories/components/category-attribute-row";

type CategoryTableProps = {
  fields: FieldArrayWithId<CategoryFormValues, "attributes", "id">[];
  remove: UseFieldArrayRemove;
};

export default function CategoryTable({ fields, remove }: CategoryTableProps) {
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Required</TableHead>
          <TableHead>Options</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fields.map((field, index) => (
          <CategoryAttributeRow
            key={field.id}
            index={index}
            onRemove={() => remove(index)}
          />
        ))}
      </TableBody>
    </Table>
  );
}
