import BlogComments from "./blog-comments";
import BlogContent from "./blog-content";
import BlogRelatedWrapper from "./blog-related-wrapper";

const BlogWrapper = () => {
  return (
    <div className="flex flex-col gap-8">
      <BlogContent />
      <BlogRelatedWrapper />
      <BlogComments />
    </div>
  );
};

export default BlogWrapper;
