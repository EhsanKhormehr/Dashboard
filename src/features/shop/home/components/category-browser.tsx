import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import React from "react";
import ShopCategoryBrowserBox from "./category-browser-box";

const ShopCategoryBrowser = () => {
  return (
    <div className="my-20">
      <MaxWidthWrapper>
        <span className="text-xl font-bold">Browse By Category</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-8 gap-8">
          <ShopCategoryBrowserBox />
          <ShopCategoryBrowserBox />
          <ShopCategoryBrowserBox />
          <ShopCategoryBrowserBox />
          <ShopCategoryBrowserBox />
          <ShopCategoryBrowserBox />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ShopCategoryBrowser;
