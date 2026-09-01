import React from "react";
import BlogLatestWrapper from "./blog-latest-wrapper";
import BlogShareWrapper from "./blog-share-wrapper";
import { Prisma } from "../../../../../generated/prisma/client";

type BlogSidebarWrapperProps = {
  latestArticle: Prisma.BlogGetPayload<{
    select: {
      id: true;
      title: true;
      createdAt: true;
      category: true;
      slug: true;
      thumbnail : true
    };
    orderBy: {
      createdAt: "desc";
    };
    take: 4;
  }>[];
};

const BlogSidebarWrapper = ({ latestArticle }: BlogSidebarWrapperProps) => {
  return (
    <div className="flex flex-col gap-8">
      <BlogLatestWrapper latestArticle={latestArticle} />
      <BlogShareWrapper />
    </div>
  );
};

export default BlogSidebarWrapper;
