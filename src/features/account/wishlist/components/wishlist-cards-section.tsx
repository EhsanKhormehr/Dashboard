import React from "react";
import WishlistCard from "./wishlist-card";

const WishlistCardsSection = () => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
    </div>
  );
};

export default WishlistCardsSection;
