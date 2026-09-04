import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductBrandForm from "@/features/dashboard/products/components/product-brand-form";
import { getBrandBySlug } from "@/features/dashboard/products/services/actions";
import React from "react";

type EditBrandProps = {
  params: Promise<{
    slug: string;
  }>;
};

const EditBrand = async ({ params }: EditBrandProps) => {
  const urlParams = await params;
  const slug = urlParams.slug;
  const brand = await getBrandBySlug(slug);
  if (!brand) {
    return;
  }
  const initialValue = {
    name: brand.name,
    slug: brand.slug,
    logo: brand.logo,
  };
  return (
    <div>
      <PageHeader title="Edit Brand" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Edit Brand</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ProductBrandForm mode="edit" initialValue={initialValue} brandId={brand.id} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBrand;
