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

const BlogsTable = () => {
  const { data } = useGetBlogs();
  console.log(data);
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
            <TableCell>{blog.status}</TableCell>
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
