import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import LatestBlogCard from "@/features/shop/blogs/components/latest-blog-card";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-15">
        <div>
          <ShopTitle title="Latest Articles" />
          <span className="text-xs text-muted-foreground">
            News, reviews, guides, and insights about tech
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-6">
            <LatestBlogCard />
            <LatestBlogCard />
            <LatestBlogCard />
            <LatestBlogCard />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Blogs;
