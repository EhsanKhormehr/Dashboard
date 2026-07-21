import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import HomePageProductCard from "@/features/shop/home/components/product-card";
import React from "react";

const RelatedProducts = () => {
  return (
    <div className="my-14">
      <MaxWidthWrapper>
        <ShopTitle title="Related Products" />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <HomePageProductCard />
          <HomePageProductCard />
          <HomePageProductCard />
          <HomePageProductCard />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default RelatedProducts;
