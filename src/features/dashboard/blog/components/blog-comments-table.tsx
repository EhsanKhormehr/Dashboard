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
import { BlogCommentGetPayload } from "../../../../../generated/prisma/models";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Eye, X } from "lucide-react";
import { useUpdateBlogCommentStatus } from "../services/useMutation";
import { CommentStatus } from "../../../../../generated/prisma/enums";

type BlogCommentsTableProps = {
  comments: BlogCommentGetPayload<{
    where: {};
    orderBy: {
      createdAt: "desc";
    };
    include: {
      blog: {
        select: {
          title: true;
          slug: true;
        };
      };
      user: {
        select: {
          userName: true;
        };
      };
    };
  }>[];
};

export const commentStatusVariants: Record<CommentStatus, string> = {
  APPROVED: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",

  REJECTED: "bg-red-500/10 text-red-600 dark:text-red-400",

  PENDING: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export const commentStatusLabels: Record<CommentStatus, string> = {
  APPROVED: "Approved",
  REJECTED: "Rejected",
  PENDING: "Pending",
};
const BlogCommentsTable = ({ comments }: BlogCommentsTableProps) => {
  const { mutate: confirmComment, isPending } = useUpdateBlogCommentStatus();

  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Blog</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>Comment preview</TableHead>
          <TableHead>CreatedAt</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {comments.map((comment) => (
          <TableRow key={comment.id}>
            <TableCell className=" max-w-[300px]">
              <Link
                href={`/blogs/${comment.blog?.slug}`}
                className="h-full py-1.5 block truncate"
              >
                {comment.blog?.title}
              </Link>
            </TableCell>
            <TableCell>{comment.user?.userName}</TableCell>
            <TableCell className="!max-w-[10px]">
              <p className="truncate">{comment.content}</p>
            </TableCell>
            <TableCell>{new Date(comment.createdAt).toDateString()}</TableCell>
            <TableCell>
              <Badge className={`${commentStatusVariants[comment.status]}`}>
                {commentStatusLabels[comment.status]}
              </Badge>
            </TableCell>
            <TableCell className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="cursor-pointer border-0"
                  >
                    <Eye />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-surface sm:!max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Comment Content</DialogTitle>
                  </DialogHeader>
                  <p className="mt-2 leading-7 font-semibold text-sm">
                    {comment.content}
                  </p>
                </DialogContent>
              </Dialog>
              <Button
                variant={"destructive"}
                className="cursor-pointer"
                onClick={() =>
                  confirmComment({ id: comment.id, status: "REJECTED" })
                }
                disabled={comment.status === "REJECTED" || isPending}
              >
                <X />
              </Button>
              <Button
                variant={"ghost"}
                className="bg-emerald-400/40 hover:bg-emerald-400/70 text-emerald-900 dark:bg-emerald-400/20 dark:hover:bg-emerald-400/40 dark:text-emerald-200 cursor-pointer"
                onClick={() =>
                  confirmComment({ id: comment.id, status: "APPROVED" })
                }
                disabled={comment.status === "APPROVED" || isPending}
              >
                <Check />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogCommentsTable;
