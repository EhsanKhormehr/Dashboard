import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogTagForm from "@/features/dashboard/blog/components/blog-tag-form";
import { getBlogTag } from "@/features/dashboard/blog/services/actions";
import React from "react";

type BlogTagsEdit = {
  params: {
    id: string;
  };
};

const BlogTagsEdit = async ({ params }: BlogTagsEdit) => {
  const urlParams = await params;
  const tagId = urlParams.id;
  const blogTag = await getBlogTag(tagId);
  
  return (
    <div>
      <PageHeader title="Edit Blog Tags" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Edit Blog Tags</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <BlogTagForm mode="edit" initialData={blogTag} blogTagId={tagId} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogTagsEdit;
