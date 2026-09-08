"use client";
import { Badge } from "@/components/ui/badge";
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
import { CommentStatus, Prisma } from "../../../../../generated/prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Eye, X } from "lucide-react";
import { useChangeProductCommentStatus } from "../services/useMutation";

type ProductCommentsTableProps = {
  comments: Prisma.ProductCommentGetPayload<{
    include: {
      user: {
        select: {
          userName: true;
        };
      };
      product: {
        select: {
          name: true;
          slug: true;
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

const ProductCommentsTable = ({ comments }: ProductCommentsTableProps) => {
  const { mutate: changeCommentStatus } = useChangeProductCommentStatus();
  return (
    <Table className="min-w-[1200px]">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
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
            <TableCell>
              <Link href={`/products/${comment.product?.slug}`}>
                {comment.product?.name}
              </Link>
            </TableCell>
            <TableCell>{comment.user?.userName}</TableCell>
            <TableCell>{comment.content}</TableCell>
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
                  changeCommentStatus({ id: comment.id, status: "REJECTED" })
                }
                disabled={comment.status === "REJECTED"}
              >
                <X />
              </Button>
              <Button
                variant={"ghost"}
                className="bg-emerald-400/40 hover:bg-emerald-400/70 text-emerald-900 dark:bg-emerald-400/20 dark:hover:bg-emerald-400/40 dark:text-emerald-200 cursor-pointer"
                onClick={() =>
                  changeCommentStatus({ id: comment.id, status: "APPROVED" })
                }
                disabled={comment.status === "APPROVED"}
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

export default ProductCommentsTable;
