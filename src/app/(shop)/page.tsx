import HomeArrivals from "@/features/shop/home/components/home-arrivals";
import HomeBanner from "@/features/shop/home/components/home-banner";
import HomeBenefits from "@/features/shop/home/components/home-benefits";
import HomeBestProducts from "@/features/shop/home/components/home-best-products";
import HomeCategory from "@/features/shop/home/components/home-category";
import HomeDiscountedProducts from "@/features/shop/home/components/home-discounted";
import HomeFeaturedBrands from "@/features/shop/home/components/home-featured-brands";
import HomeNewsletter from "@/features/shop/home/components/home-newsletter";
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
      <HomeFeaturedBrands />
      <HomeArrivals />
      <HomeNewsletter /> 
    </div>
  );
};

export default HomePage;
