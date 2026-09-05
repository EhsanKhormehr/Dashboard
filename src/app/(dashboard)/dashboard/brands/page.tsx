import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductBrandTable from "@/features/dashboard/products/components/product-brand-table";
import { getBrands } from "@/features/dashboard/products/services/actions";
import React from "react";

const Brands = async () => {
  const brands = await getBrands();
  return (
    <div>
      <PageHeader title="Brands" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Brands</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ProductBrandTable brands={brands} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Brands;
