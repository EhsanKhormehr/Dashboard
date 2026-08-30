import React from "react";
import CommentsWrapper from "../../shared/components/comments/comments-wrapper";
import { TextAlignStart } from "lucide-react";

type BlogCommentsProps = {
  userId: string | null;
  blogId: string;
};

const BlogComments = ({ userId, blogId }: BlogCommentsProps) => {
  return (
    <div className="bg-surface p-5 rounded-xl shadow-soft-card">
      <div className="flex items-center gap-2">
        <TextAlignStart className="text-primary" />
        <h3 className="font-extrabold text-lg">Comments</h3>
      </div>
      <CommentsWrapper type="blog" userId={userId} blogId={blogId} />
    </div>
  );
};

export default BlogComments;
