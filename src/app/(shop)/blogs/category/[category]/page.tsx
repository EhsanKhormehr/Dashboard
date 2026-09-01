import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import BlogsCard from "@/features/shop/blogs/components/blogs-card";
import { getArticlesByCategory } from "@/features/shop/blogs/services/actions";
import React from "react";

type BlogsCategoryProps = {
  params: Promise<{
    category: string;
  }>;
};

const BlogsCategory = async ({ params }: BlogsCategoryProps) => {
  const urlParams = await params;
  const category = urlParams.category;
  const articles = await getArticlesByCategory(category)
  return <MaxWidthWrapper className="mt-15">
      <h3 className="capitalize text-center text-2xl font-extrabold">
        <span className="text-primary">{category}</span> Category
      </h3>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {articles.map((article) => (
          <BlogsCard
            title={article.title}
            createdAt={article.createdAt}
            description={article.description}
            slug={article.slug}
            key={article.id}
            userName={article.user?.userName}
            thumbnail={article.thumbnail}
          />
        ))}
      </div>
    </MaxWidthWrapper>;
};

export default BlogsCategory;
