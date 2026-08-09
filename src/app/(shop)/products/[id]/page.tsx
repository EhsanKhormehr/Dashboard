import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductBreadcrumb from "@/features/shop/products/components/product-breadcrumb";
import ProductExpertReview from "@/features/shop/products/components/product-expert-review";
import ProductInfoWrapper from "@/features/shop/products/components/product-info-wrapper";
import ProductPurchasePanel from "@/features/shop/products/components/product-purchase-panel";
import ProductSectionsNav from "@/features/shop/products/components/product-sections-nav";
import ProductSpecifications from "@/features/shop/products/components/product-specifications";
import React from "react";

const Product = () => {
  return (
    <MaxWidthWrapper>
      {/* <ProductBreadcrumb /> */}
      <div className="grid grid-cols-12 mt-10 gap-5 relative">
        <ProductInfoWrapper />
        <ProductPurchasePanel />
        <ProductSectionsNav />
        <ProductSpecifications />
        <ProductExpertReview />
      </div>
    </MaxWidthWrapper>
  );
};

export default Product;
