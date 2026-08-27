"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";
import { useGetBlogTags } from "../services/useQueries";
import ConfirmDialog from "@/components/common/confirm-dialog";
import { useDeleteBlogTag } from "../services/useMutation";

const BlogTagsTable = () => {
  const { data: tags } = useGetBlogTags();
  const { mutate: deleteTag } = useDeleteBlogTag();
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tags?.map((tag) => (
          <TableRow key={tag.id}>
            <TableCell>{tag.id}</TableCell>
            <TableCell>{tag.name}</TableCell>
            <TableCell>{tag.slug}</TableCell>
            <TableCell>{new Date(tag.createdAt).toDateString()}</TableCell>
            <TableCell>{new Date(tag.updatedAt).toDateString()}</TableCell>
            <TableCell>
              <Button
                variant={"outline"}
                className="cursor-pointer px-4 font-semibold"
                asChild
              >
                <Link href={"/dashboard/blog-tags/3232/edit"}>Edit</Link>
              </Button>
            </TableCell>
            <TableCell>
              <ConfirmDialog
                trigger={
                  <Button
                    variant={"destructive"}
                    className="cursor-pointer px-4 font-semibold"
                  >
                    Delete
                  </Button>
                }
                cancelText="Cancel"
                cancelVariant="outline"
                confirmVariant="destructive"
                confirmText="Delete"
                title="Are you sure to delete this tag?"
                onConfirm={() => deleteTag(tag.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogTagsTable;
