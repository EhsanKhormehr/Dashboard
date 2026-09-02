import PageHeader from "@/components/common/page-header";
import ProductSearch from "@/features/dashboard/products/components/products-search";
import ProductSize from "@/features/dashboard/products/components/products-page-size";
import ProductsCard from "@/features/dashboard/products/components/products-card";
import ProductsFilter from "@/features/dashboard/products/components/products-filter";
import React from "react";
import { getFilteredProducts } from "@/features/dashboard/products/services/actions";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/common/pagination";

type ProductsProps = {
  searchParams: Promise<{
    q?: string;
    sortBy?: string;
    category?: string;
    page?: string;
    limit?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
};

export default async function Products({ searchParams }: ProductsProps) {
  const params = await searchParams;
  const filteredProducts = await getFilteredProducts(params);


  return (
    <div>
      <div className="flex justify-between items-center">
        <PageHeader title="Products" />
        <ProductsFilter />
      </div>
      <div className="flex items-center justify-between mt-6">
        <div>
          <ProductSearch />
        </div>
        <div>
          <ProductSize />
        </div>
      </div>
      {filteredProducts.products.length === 0 && (
        <div className="flex min-h-[320px] flex-col items-center justify-center text-center px-4">
          <SearchX className="h-10 w-10 text-muted-foreground mb-3" />
          <h3 className="text-lg font-semibold">No products found</h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-sm">
            Try a different search term or clear the current filters.
          </p>
        </div>
      )}

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.products.map((product) => (
            <ProductsCard
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              name={product.name}
              price={product.price}
              rate="4"
              rateCount="131"
            />
          ))}
        </div>
        <Pagination baseHref="/dashboard/products" currentPage={filteredProducts.currentPage} pageSize={params.limit || "8"} totalItemsCount={filteredProducts.totalCount} /> 
      </div>
    </div>
  );
}
