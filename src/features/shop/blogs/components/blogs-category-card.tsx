import Link from "next/link";
import React from "react";

type CategoryBlogCardProps = {
  label: string;
  slug: string;
};

const BlogsCategoryCard = ({ label, slug }: CategoryBlogCardProps) => {
  return (
    <Link
      href={`/blogs/category/${slug}`}
      className="bg-surface shadow-soft-card rounded-sm flex items-center justify-center py-3 font-extrabold"
    >
      {label}
    </Link>
  );
};

export default BlogsCategoryCard;
