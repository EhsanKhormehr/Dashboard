import { TextAlignStart } from "lucide-react";
import React from "react";
import BlogRelatedCard from "./blog-related-card";
import { getRelatedArticles } from "../services/actions";

type BlogRelatedWrapperProps = {
  category: string;
  id: string;
};

const BlogRelatedWrapper = async ({
  category,
  id,
}: BlogRelatedWrapperProps) => {
  const relatedArticles = await getRelatedArticles(category, id);
  return (
    <div className="bg-surface shadow-soft-card rounded-xl px-5">
      <div className="py-5 flex items-center gap-2">
        <TextAlignStart className="text-primary" />
        <h3 className="font-extrabold text-lg">Related Articles</h3>
      </div>
      <div className="pb-5">
        <div className="grid grid-cols-1 min-[400]:grid-cols-2 md:grid-cols-4 gap-5">
          {relatedArticles.map((article) => (
            <BlogRelatedCard
              key={article.id}
              title={article.title}
              author={article.user?.userName}
              slug={article.slug}
              createdAt={article.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogRelatedWrapper;
