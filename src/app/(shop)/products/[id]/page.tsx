import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductBreadcrumb from "@/features/shop/products/components/product-breadcrumb";
import ProductInfoWrapper from "@/features/shop/products/components/product-info-wrapper";
import React from "react";

const Product = () => {
  return (
    <MaxWidthWrapper>
      <ProductBreadcrumb />
      <div className="grid grid-cols-12 mt-10 gap-5">
        <ProductInfoWrapper />
        <div className="col-span-12 lg:col-span-3 p-4 bg-surface rounded-2xl"></div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Product;
