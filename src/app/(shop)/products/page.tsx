import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import Pagination from "@/components/common/pagination";
import { getCategories } from "@/features/dashboard/products/services/actions";
import ProductsFiltering from "@/features/shop/products/components/products-filtering";
import ProductsTopbarFilter from "@/features/shop/products/components/products-topbar-filter";
import ProductsWrapper from "@/features/shop/products/components/products-wrapper";
import {
  getBrands,
  getProducts,
} from "@/features/shop/products/services/actions";
import React from "react";

type ProductsProps = {
  searchParams: Promise<{
    search?: string;
    sortBy?: string;
    category?: string[];
    brand?: string[];
    min?: string;
    max?: string;
    inStock?: string;
    page?: string;
    perPage?: string;
  }>;
};

const Products = async ({ searchParams }: ProductsProps) => {
  const urlParams = await searchParams;
  const normalizeUrlParams = {
    ...urlParams,
    brand: urlParams.brand
      ? Array.isArray(urlParams.brand)
        ? urlParams.brand
        : [urlParams.brand]
      : undefined,

    category: urlParams.category
      ? Array.isArray(urlParams.category)
        ? urlParams.category
        : [urlParams.category]
      : undefined,
  };
  const products = await getProducts(normalizeUrlParams);
  const categories = await getCategories();
  const brands = await getBrands();
  console.log(products.priceRange)
  return (
    <div>
      <MaxWidthWrapper className="grid gap-5 grid-cols-12 py-15">
        <div className="col-span-3 hidden lg:flex">
          <div className="bg-surface w-full rounded-2xl shadow-soft-card px-4 self-start py-7 sticky top-5">
            <ProductsFiltering categories={categories} brands={brands} pricRange={products.priceRange}  />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ProductsTopbarFilter categories={categories} brands={brands} productCount={products.totalCount} />
          <ProductsWrapper products={products.products} />
          <Pagination
            baseHref="/products"
            currentPage={1}
            pageSize={String(products.perPage)}
            totalItemsCount={products.totalCount}
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Products;
