import React from "react";
import { Star } from "lucide-react";
import CommentsBox from "./comments-box";
import CommentsForm from "./comments-form";
import { CommentsProvider } from "./comments-context";
import { getArticleComments } from "@/features/shop/blogs/services/actions";

type CommentsWrapperProps = {
  type: "product" | "blog";
  userId: string | null;
  blogId: string;
};

const CommentsWrapper = async ({
  type,
  userId,
  blogId,
}: CommentsWrapperProps) => {
  const comments = await getArticleComments(blogId);
  console.log(comments);
  return (
    <CommentsProvider type={type}>
      <div>
        <CommentsForm userId={userId} blogId={blogId} />
        <div className="mt-10">
          <div className="border-b flex items-center justify-between">
            <div className="py-2">
              <span className="text-base font-bold text-surface-foreground">
                {type === "product" ? "Reviews" : "Comments"}
              </span>
              <span className="text-muted-foreground text-xs ml-1">({comments.length})</span>
            </div>
            {type === "product" && (
              <div className="flex items-center gap-1 rounded-full border border-yellow-400/50 dark:border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-rating">
                <Star className="size-3.5 fill-rating stroke-rating" />
                4.8 average
              </div>
            )}
          </div>
          <div>
            {comments.map((comment) => (
              <CommentsBox
                key={comment.id}
                userName={comment.user?.userName}
                createdAt={comment.createdAt}
                content={comment.content}
              />
            ))}
          </div>
        </div>
      </div>
    </CommentsProvider>
  );
};

export default CommentsWrapper;
