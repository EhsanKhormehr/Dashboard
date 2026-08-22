import PageHeader from "@/components/common/page-header";
import Pagination from "@/components/common/pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogsFilter from "@/features/dashboard/blog/components/blogs-filter";
import BlogsTable from "@/features/dashboard/blog/components/blogs-table";
import { getBlogs } from "@/features/dashboard/blog/services/actions";
import React from "react";
import { BlogStatus } from "../../../../../generated/prisma/enums";

type BlogsProps = {
  searchParams: Promise<{
    search?: string | undefined;
    category?: string | undefined;
    status?: BlogStatus | undefined;
    page?: string | undefined;
    perPage?: string | undefined;
  }>;
};

const Blogs = async ({ searchParams }: BlogsProps) => {
  const params = await searchParams;
  const blogs = await getBlogs(params)
  return (
    <div>
      <PageHeader title="Blogs" />
      <div className="mt-6">
        <Card className="shadow-card mt-6 py-8">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">Blogs</CardTitle>
          </CardHeader>
          <CardContent>
            <BlogsFilter />
            <BlogsTable blogs={blogs.blogs} />
            <Pagination
              baseHref="/dashboard/blogs"
              currentPage={blogs.page}
              pageSize={String(blogs.perPage)}
              totalItemsCount={blogs.totalCount}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
