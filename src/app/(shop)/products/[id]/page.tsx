import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductBreadcrumb from "@/features/shop/products/components/product-breadcrumb";
import ProductInfoWrapper from "@/features/shop/products/components/product-info-wrapper";
import ProductPurchasePanel from "@/features/shop/products/components/product-purchase-panel";
import React from "react";

const Product = () => {
  return (
    <MaxWidthWrapper>
      <ProductBreadcrumb />
      <div className="grid grid-cols-12 mt-10 gap-5 relative">
        <ProductInfoWrapper />
        <ProductPurchasePanel />
      </div>
    </MaxWidthWrapper>
  );
};

export default Product;
