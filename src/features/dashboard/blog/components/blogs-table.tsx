"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useGetBlogs } from "../services/useQueries";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const blogStatusVariants = {
  DRAFT:
    "border-yellow-200 bg-yellow-100 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",

  PUBLISHED:
    "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400",

  ARCHIVED:
    "border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
} as const;
export const blogStatusLabel = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
  ARCHIVED: "Archived",
};

const BlogsTable = () => {
  const { data } = useGetBlogs();
  return (
    <Table className="min-w-[1200px]">
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell>
              <Image
                src={"/shop/promo-1.png"}
                width={70}
                height={70}
                className="rounded-md"
                alt="blog"
              />
            </TableCell>
            <TableCell>{blog.title}</TableCell>
            <TableCell>{blog.category}</TableCell>
            <TableCell>{blog.user?.userName}</TableCell>
            <TableCell>
              <Badge className={blogStatusVariants[blog.status]}>
                {blogStatusLabel[blog.status]}
              </Badge>
            </TableCell>
            <TableCell>{new Date(blog.createdAt).toLocaleString()}</TableCell>
            <TableCell>{new Date(blog.updatedAt).toLocaleString()}</TableCell>
            <TableCell>
              <Button
                variant={"outline"}
                className="cursor-pointer px-4 font-semibold"
              >
                <Link href={`/dashboard/blogs/${blog.id}/edit`}>Edit</Link>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                className="cursor-pointer px-4 font-semibold"
                variant={"destructive"}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogsTable;
