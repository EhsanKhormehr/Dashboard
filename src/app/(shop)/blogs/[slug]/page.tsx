import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import BlogSidebarWrapper from "@/features/shop/blogs/components/blog-sidebar-wrapper";
import BlogWrapper from "@/features/shop/blogs/components/blog-wrapper";
import { getArticle } from "@/features/shop/blogs/services/actions";
import React from "react";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const urlParams = await params;
  const slug = urlParams.slug;
  const article = await getArticle(slug);
  if (!article) {
    return <p>Article not found</p>;
  }
  return (
    <MaxWidthWrapper className="grid grid-cols-12 gap-5 mt-6 ">
      <div className="col-span-12 lg:col-span-9">
        <BlogWrapper article={article} />
      </div>
      <div className="col-span-12 lg:col-span-3">
        <BlogSidebarWrapper />
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogPage;
