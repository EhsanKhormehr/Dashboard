import HomeBanner from "@/features/shop/home/components/home-banner";
import HomeBenefits from "@/features/shop/home/components/home-benefits";
import HomeBestProducts from "@/features/shop/home/components/home-best-products";
import HomeCategory from "@/features/shop/home/components/home-category";
import HomeDiscountedProducts from "@/features/shop/home/components/home-discounted";
import HomePromoBanners from "@/features/shop/home/components/home-promo-banners";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <HomeCategory />
      <HomeDiscountedProducts />
      <HomeBestProducts />
      <HomeBenefits />
      <HomePromoBanners />
    </div>
  );
};

export default HomePage;
