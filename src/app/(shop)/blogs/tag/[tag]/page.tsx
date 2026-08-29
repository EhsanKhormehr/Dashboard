import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import BlogsCard from "@/features/shop/blogs/components/blogs-card";
import { getArticlesByTag } from "@/features/shop/blogs/services/actions";
import React from "react";

type BlogsTagProps = {
  params: Promise<{
    tag: string;
  }>;
};

const BlogsTag = async ({ params }: BlogsTagProps) => {
  const urlParams = await params;
  const tag = urlParams.tag;
  const articles = await getArticlesByTag(tag);
  return (
    <MaxWidthWrapper className="mt-15">
      <h3 className="capitalize text-center text-2xl font-extrabold">
        <span className="text-primary">{tag}</span> Tag
      </h3>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {articles.map((article) => (
          <BlogsCard
            title={article.title}
            createdAt={article.createdAt}
            description={article.description}
            slug={article.slug}
            key={article.id}
            userName={article.user?.userName}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogsTag;
