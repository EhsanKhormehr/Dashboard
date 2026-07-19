import ProductWrapper from "@/features/shop/products/components/product/product-wrapper";
import ProductsBreadcrumb from "@/features/shop/products/components/products-breadcrumb";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <ProductsBreadcrumb />
      <ProductWrapper />
    </div>
  );
};

export default ProductPage;
