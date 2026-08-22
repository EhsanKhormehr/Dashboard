import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogsFilter from "@/features/dashboard/blog/components/blogs-filter";
import BlogsTable from "@/features/dashboard/blog/components/blogs-table";
import React from "react";

type BlogsProps = {
  searchParams: Promise<{
    search?: string | undefined;
    category?: string | undefined;
    status?: string | undefined;
  }>;
};

const Blogs = async ({ searchParams }: BlogsProps) => {
  const params = await searchParams;
  
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
            <BlogsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
