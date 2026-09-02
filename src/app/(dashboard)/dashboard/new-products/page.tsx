import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductForm from "@/features/dashboard/products/components/product-form";
import React from "react";

export default function NewProduct() {

  return (
    <div>
      <PageHeader title="New Product"/> 
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">New Product</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ProductForm mode="create" />
        </CardContent>
      </Card>
    </div>
  );
}
