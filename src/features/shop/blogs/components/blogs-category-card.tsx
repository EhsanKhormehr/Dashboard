import Link from "next/link";
import React from "react";

type CategoryBlogCardProps = {
  label: string;
};

const BlogsCategoryCard = ({ label }: CategoryBlogCardProps) => {
  return (
    <Link
      href={"/"}
      className="bg-surface shadow-soft-card rounded-sm flex items-center justify-center py-3 font-extrabold"
    >
      {label}
    </Link>
  );
};

export default BlogsCategoryCard;
