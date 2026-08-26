import { TextAlignStart } from "lucide-react";
import React from "react";
import BlogRelatedCard from "./blog-related-card";

const BlogRelatedWrapper = () => {
  return (
    <div className="bg-surface shadow-soft-card rounded-xl px-5">
      <div className="py-5 flex items-center gap-2">
        <TextAlignStart className="text-primary" />
        <h3 className="font-extrabold text-lg">Related Articles</h3>
      </div>
      <div className="pb-5">
        <div className="grid grid-cols-1 min-[400]:grid-cols-2 md:grid-cols-4 gap-5">
          <BlogRelatedCard />
          <BlogRelatedCard />
          <BlogRelatedCard />
          <BlogRelatedCard />
        </div>
      </div>
    </div>
  );
};

export default BlogRelatedWrapper;
