import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import BlogSidebarWrapper from "@/features/shop/blogs/components/blog-sidebar-wrapper";
import BlogWrapper from "@/features/shop/blogs/components/blog-wrapper";
import React from "react";

const BlogPage = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-12 gap-5 mt-6 ">
      <div className="col-span-12 lg:col-span-9">
        <BlogWrapper />
      </div>
      <div className="col-span-12 lg:col-span-3">
        <BlogSidebarWrapper />
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogPage;
