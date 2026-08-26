import ShopTitle from "@/components/common/shop-title";
import CommentsWrapper from "../../shared/components/comments/comments-wrapper";
import { MessageSquareText } from "lucide-react";

const ProductReviews = () => {
  return (
    <div
      className="bg-surface p-5 col-span-12 lg:col-span-9 rounded-xl mt-2 shadow-soft-card"
      id="reviews"
    >
      <div className="flex items-center">
        <MessageSquareText className="text-primary size-[25px]" />
        <ShopTitle
          title="Customer Reviews"
          isShape={false}
          className="ml-2 font-black"
        />
      </div>
      <CommentsWrapper type="product" />
    </div>
  );
};

export default ProductReviews;
