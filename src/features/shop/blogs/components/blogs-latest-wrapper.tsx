import React from "react";
import { getLatestArticles } from "../services/actions";
import BlogsLatestCard from "./blogs-latest-card";

const BlogsLatestWrapper = async () => {
  const latestArticles = await getLatestArticles();
  return (
    <>
      {latestArticles.map((article) => (
        <BlogsLatestCard
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
