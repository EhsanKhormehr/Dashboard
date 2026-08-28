import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogForm from "@/features/dashboard/blog/components/blog-form";
import { getBlogs } from "@/features/dashboard/blog/services/actions";
import { BlogFormValues } from "@/features/dashboard/blog/types/schema";
import { prisma } from "@/lib/prisma";
import React from "react";
import { BlogStatus } from "../../../../../../../generated/prisma/enums";

const BlogEdit = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const data = await prisma.blog.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      slug: true,
      content: true,
      description: true,
      category: true,
      status: true,
      thumbnail: true,
      tags: true,
      readingTime : true
    },
  });
  if (!data) {
    return <p>Blog not found</p>;
  }
  const initialValue = {
    title: data.title,
    slug: data.slug,
    content: data.content,
    description: data.description,
    category: data.category,
    status: data.status as BlogStatus,
    thumbnail: data.thumbnail ?? undefined,
    tags: data.tags.map((tag) => tag.id),
    readingTime : data.readingTime ?? undefined
  };
  return (
    <div>
      <PageHeader title="Edit Blog" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Edit Blog</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <BlogForm mode="edit" initialValue={initialValue} blogId={id} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogEdit;
