import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopBanner from "@/features/shop/home/components/banner";
import HomePageCampaignBanner from "@/features/shop/home/components/campaign-banner";
import ShopCategoryBrowser from "@/features/shop/home/components/category-browser";
import HomePageDiscountProducts from "@/features/shop/home/components/discount-products";
import HomePageProducts from "@/features/shop/home/components/products";
import HomePagePromoGrid from "@/features/shop/home/components/promo-grid";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <ShopBanner />
      <ShopCategoryBrowser />
      <HomePageProducts />
      <HomePagePromoGrid />
      <HomePageDiscountProducts />
      <HomePageCampaignBanner />
    </div>
  );
};

export default HomePage;
