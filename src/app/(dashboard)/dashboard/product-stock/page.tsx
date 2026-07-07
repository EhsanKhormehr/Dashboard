import PageHeader from "@/components/common/page-header";
import { Card, CardContent } from "@/components/ui/card";
import ProductStockSearch from "@/features/dashboard/product-stock/product-stock-search";
import ProductStockTable from "@/features/dashboard/product-stock/product-stock-table";
import Link from "next/link";
import React from "react";

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

export default async function ProductStock({searchParams} : ProductsProps) {
    const params = await searchParams
    
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <PageHeader title="Product Stock" />
        <div className="relative w-[260px]">
          <ProductStockSearch />
        </div>
      </div>
      <div className="mt-6">
        <Card className="shadow-card mt-6">
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ProductStockTable searchParams={params} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
