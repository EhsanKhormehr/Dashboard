import CommentsWrapper from "../../shared/components/comments/comments-wrapper";

const ProductReviews = () => {
  return (
    <div className="bg-surface p-5 col-span-12 lg:col-span-9 rounded-xl mt-2 shadow-soft-card" id="reviews">
      <CommentsWrapper type="product" />
    </div>
  );
};

export default ProductReviews;
