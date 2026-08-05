import HomeBanner from "@/features/shop/home/components/home-banner";
import HomeBenefits from "@/features/shop/home/components/home-benefits";
import HomeBestProducts from "@/features/shop/home/components/home-best-products";
import HomeCategory from "@/features/shop/home/components/home-category";
import HomeDiscountedProducts from "@/features/shop/home/components/home-discounted";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <HomeCategory />
      <HomeDiscountedProducts />
      <HomeBestProducts />
      <HomeBenefits />
    </div>
  );
};

export default HomePage;
