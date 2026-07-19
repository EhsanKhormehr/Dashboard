import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductWrapper from "@/features/shop/products/components/product/product-wrapper";
import ProductsBreadcrumb from "@/features/shop/products/components/products-breadcrumb";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <ProductsBreadcrumb />
        <ProductWrapper />
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductPage;
