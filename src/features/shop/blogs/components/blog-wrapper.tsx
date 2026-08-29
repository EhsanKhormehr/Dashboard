import { Prisma } from "../../../../../generated/prisma/client";
import BlogComments from "./blog-comments";
import BlogContent from "./blog-content";
import BlogRelatedWrapper from "./blog-related-wrapper";

type BlogWrapperProps = {
  article: Prisma.BlogGetPayload<{
    include: {
      user: {
        select: {
          userName: true;
        };
      };
      tags: {
        select: {
          id: true;
          name: true;
          slug: true;
        };
      };
    };
  }>;
};

const BlogWrapper = ({ article }: BlogWrapperProps) => {
  return (
    <div className="flex flex-col gap-8">
      <BlogContent article={article} />
      <BlogRelatedWrapper category={article.category} id={article.id}  />
      <BlogComments />
    </div>
  );
};

export default BlogWrapper;
