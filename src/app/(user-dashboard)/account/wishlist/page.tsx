import ShopTitle from "@/components/common/shop-title";
import WishlistCardsSection from "@/features/account/wishlist/components/wishlist-cards-section";
import WishlistFilter from "@/features/account/wishlist/components/wishlist-filter";
import WishlistPagination from "@/features/account/wishlist/components/wishlist-pagination";
import React from "react";

const Wishlist = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
      <ShopTitle title="Wishlist" />
      <span className="text-xs text-muted-foreground">
        Products you saved for later
      </span>
      <div>
        <WishlistFilter />
        <WishlistCardsSection />
        <WishlistPagination />
      </div>
    </div>
  );
};

export default Wishlist;
