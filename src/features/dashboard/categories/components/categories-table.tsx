"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useCategories } from "../services/useQueries";
import CategoriesRow from "./categories-row";

export default function CategoriesTable() {
  const { data } = useCategories();
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Attributes</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((category) => (
          <CategoriesRow key={category.id} category={category} />
        ))}
      </TableBody>
    </Table>
  );
}
