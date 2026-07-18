import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductsCard from "@/features/dashboard/products/components/products-card";
import React from "react";
import HomePageProductCard from "./product-card";

const HomePageDiscountProducts = () => {
  return (
    <div className="mb-20">
      <MaxWidthWrapper>
        <span className="text-xl font-bold">Discounts up to -50%</span>
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
