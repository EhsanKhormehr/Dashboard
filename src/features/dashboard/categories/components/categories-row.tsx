import ConfirmDialog from "@/components/common/confirm-dialog";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import React from "react";
import { useDeleteCategory } from "../services/useMutation";

type CategoriesRowProps = {
  category: {
    id: string;
    name: string;
    slug: string;
    createdAt: string | Date;
    _count: {
      attributes: number;
    };
  };
};

export default function CategoriesRow({ category }: CategoriesRowProps) {
  const { mutate } = useDeleteCategory();

  return (
    <TableRow>
      <TableCell>{category.name}</TableCell>
      <TableCell>{category.slug}</TableCell>
      <TableCell>{category._count.attributes}</TableCell>
      <TableCell>8</TableCell>
      <TableCell>{new Date(category.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>
        <Button
          type="button"
          className="cursor-pointer px-4 font-semibold"
          variant={"outline"}
          asChild
        >
          <Link href={`/dashboard/categories/${category.id}/edit`}>Edit</Link>
        </Button>
      </TableCell>
      <TableCell>
        <ConfirmDialog
          trigger={
            <Button
              type="button"
              className="cursor-pointer px-4 font-semibold"
              variant={"destructive"}
            >
              Delete
            </Button>
          }
          title="Are you sure to delete this category?"
          confirmText="Delete"
          cancelText="Cancel"
          confirmVariant="destructive"
          cancelVariant="outline"
          onConfirm={() => mutate(category.id)}
        />
      </TableCell>
    </TableRow>
  );
}
