import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductsCard from "@/features/dashboard/products/components/products-card";
import React from "react";
import HomePageProductCard from "./product-card";
import ShopTitle from "@/components/common/shop-title";

const HomePageDiscountProducts = () => {
  return (
    <div className="mb-20">
      <MaxWidthWrapper>
        <ShopTitle title="Discounts up to -50%" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
            <HomePageProductCard />
            <HomePageProductCard />
            <HomePageProductCard />
            <HomePageProductCard />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePageDiscountProducts;
