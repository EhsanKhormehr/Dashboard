import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import BlogsFilter from "@/features/shop/blogs/components/blogs-filter";
import BlogsLatestWrapper from "@/features/shop/blogs/components/blogs-latest-wrapper";
import BlogsWrapper from "@/features/shop/blogs/components/blogs-wrapper";
import CategoryBlogCard from "@/features/shop/blogs/components/category-blog-card";
import { getArticles } from "@/features/shop/blogs/services/actions";
import React from "react";

const BLOG_CATEGORIES = [
  { label: "Hardware" },
  { label: "News" },
  { label: "Technology" },
  { label: "Buying Guide" },
  { label: "Artificial Intelligence" },
  { label: "Gaming" },
  { label: "Learning" },
  { label: "IT & Information" },
  { label: "Reviews" },
];

type BlogsProps = {
  searchParams: Promise<{
    search?: string;
    sortBy?: string;
  }>;
};

const Blogs = async ({ searchParams }: BlogsProps) => {
  const params = await searchParams;
  const articles = await getArticles(params)
  console.log(articles)
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
          <BlogsLatestWrapper />
        </div>
        <div className="mt-10">
          <div>
            <ShopTitle title="Popular Categories" />
            <span className="text-xs text-muted-foreground">
              Find the topics everyone is talking about.
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            {BLOG_CATEGORIES.map((category) => (
              <CategoryBlogCard label={category.label} key={category.label} />
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-5">
          <div className="col-span-3 hidden lg:inline ">
            <BlogsFilter />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <BlogsWrapper articles={articles} />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Blogs;
