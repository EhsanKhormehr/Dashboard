import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductsSidebarFilter from "@/features/shop/products/components/products-sidebar-filter";
import ProductsTopbarFilter from "@/features/shop/products/components/products-topbar-filter";
import ProductsWrapper from "@/features/shop/products/components/products-wrapper";
import React from "react";

const Products = () => {
  return (
    <div>
      <MaxWidthWrapper className="grid gap-5 grid-cols-12 py-15">
        <div className="col-span-3 hidden lg:flex">
          <ProductsSidebarFilter />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ProductsTopbarFilter/>
          <ProductsWrapper />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Products;
