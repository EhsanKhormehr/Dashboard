import React from "react";
import ProductReviewForm from "./product-review-form";
import ProductsReviewsWrapper from "./product-reviews-wrapper";

const ProductReviews = () => {
  return (
    <div className="bg-surface p-5 col-span-12 lg:col-span-9 rounded-xl mt-2 shadow-soft-card" id="reviews">
      <ProductReviewForm />
      <ProductsReviewsWrapper />
    </div>
  );
};

export default ProductReviews;
