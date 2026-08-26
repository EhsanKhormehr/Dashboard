import React from "react";
import LatestBlogCard from "./latest-blog-card";
import { getLatestArticles } from "../services/actions";

const BlogsLatestWrapper = async () => {
  const latestArticles = await getLatestArticles();
  console.log(latestArticles);
  return (
    <>
      {latestArticles.map((article) => (
        <LatestBlogCard
          key={article.id}
          id={article.id}
          title={article.title}
          category={article.category}
          slug={article.slug}
          createdAt={article.createdAt}
        />
      ))}
    </>
  );
};

export default BlogsLatestWrapper;
