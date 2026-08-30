import PageHeader from "@/components/common/page-header";
import Pagination from "@/components/common/pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogCommentsFilter from "@/features/dashboard/blog/components/blog-comments-filter";
import BlogCommentsTable from "@/features/dashboard/blog/components/blog-comments-table";
import { getBlogsComments } from "@/features/dashboard/blog/services/actions";
import React from "react";
import { CommentStatus } from "../../../../../generated/prisma/enums";

type BlogCommentsProps = {
  searchParams: Promise<{
    search?: string;
    status?: CommentStatus | "DEFAULT";
    perPage?: string;
    page?: string;
  }>;
};

const BlogComments = async ({ searchParams }: BlogCommentsProps) => {
  const urlSearchParams = await searchParams;
  const comments = await getBlogsComments(urlSearchParams);
  console.log(comments.page)
  console.log(comments.perPage)
  console.log(comments.totalCount)
  console.log(comments.totalPages)
  return (
    <div>
      <PageHeader title="Blog Comments" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Blog Comments</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <BlogCommentsFilter />
          <BlogCommentsTable comments={comments.comments} />
          <Pagination
            baseHref="/dashboard/blog-comments"
            currentPage={comments.page}
            pageSize={String(comments.perPage)}
            totalItemsCount={comments.totalCount}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogComments;
