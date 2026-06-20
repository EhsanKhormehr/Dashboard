
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FieldArrayWithId,
  UseFieldArrayRemove,
} from "react-hook-form";
import React from "react";
import { CategoryFormValues } from "../types/schema";
import NewCategoryAttributeRow from "./attribute-row";

type NewCategoryTableProps = {
  fields: FieldArrayWithId<CategoryFormValues, "attributes", "id">[];
  remove: UseFieldArrayRemove;
};

export default function NewCategoryTable({
  fields,
  remove,
}: NewCategoryTableProps) {
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
          <NewCategoryAttributeRow
            key={field.id}
            index={index}
            onRemove={() => remove(index)}
          />
        ))}
      </TableBody>
    </Table>
  );
}
