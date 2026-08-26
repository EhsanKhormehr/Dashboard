import ReviewForm from "../../shared/components/comments/review-form";
import ReviewsWrapper from "../../shared/components/comments/reviews-wrapper";

const ProductReviews = () => {
  return (
    <div className="bg-surface p-5 col-span-12 lg:col-span-9 rounded-xl mt-2 shadow-soft-card" id="reviews">
      <ReviewForm />
      <ReviewsWrapper />
    </div>
  );
};

export default ProductReviews;
