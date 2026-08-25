import BlogContent from "./blog-content";
import BlogRelatedWrapper from "./blog-related-wrapper";

const BlogWrapper = () => {
  return (
    <div className="flex flex-col gap-8">
      <BlogContent />
      <BlogRelatedWrapper />
    </div>
  );
};

export default BlogWrapper;
