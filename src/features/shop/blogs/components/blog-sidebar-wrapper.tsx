import React from "react";
import BlogLatestWrapper from "./blog-latest-wrapper";
import BlogShareWrapper from "./blog-share-wrapper";

const BlogSidebarWrapper = () => {
  return (
    <div className="flex flex-col gap-8">
      <BlogLatestWrapper />
      <BlogShareWrapper />
    </div>
  );
};

export default BlogSidebarWrapper;
