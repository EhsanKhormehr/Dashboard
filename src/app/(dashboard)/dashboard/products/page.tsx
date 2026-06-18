import { Input } from "@/components/ui/input";
import ProductsCard from "@/features/dashboard/products/components/products-card";
import ProductsFilter from "@/features/dashboard/products/components/products-filter";
import ProductsPagination from "@/features/dashboard/products/components/products-pagination";
import {  Search } from "lucide-react";
import React from "react";

export default function Products() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Products</h1>
        <ProductsFilter />
      </div>
      <div className="relative w-full sm:w-[260px] md:w-[350px] mt-2">
        <Input
          type="text"
          placeholder="Search..."
          className="bg-surface rounded-3xl pl-10 text-sm text-foreground py-5"
        />
        <Search className="absolute top-1/2 text-foreground opacity-35 bottom-0 left-2 -translate-y-1/2"  />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
        <ProductsPagination />
      </div>
    </div>
  );
}
