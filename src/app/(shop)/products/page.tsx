import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductsBreadcrumb from "@/features/shop/products/components/products-breadcrumb";
import ProductsFiltering from "@/features/shop/products/components/products-filtering";
import ProductsWrapper from "@/features/shop/products/components/products-wrapper";

import React from "react";

const Products = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <ProductsBreadcrumb />
        <div className="grid grid-cols-12 gap-8 my-6">
          <div className="hidden lg:col-span-3 lg:inline-block">
           <ProductsFiltering />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <ProductsWrapper />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Products;
