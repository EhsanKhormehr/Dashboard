import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductForm from "@/features/dashboard/products/components/product-form";
import { getProductById } from "@/features/dashboard/products/services/actions";
import React from "react";

type ProductEditProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductEdit({ params }: ProductEditProps) {
  const urlParams = await params;
  const productId = urlParams.id;
  const product = await getProductById(productId);
  if (!product) return;
  const initialProduct = {
    name: product.name,
    slug: product.slug,
    price: product.price,
    stock: product.stock,
    content: product.content,
    categoryId: product.categoryId,
    thumbnail: product.thumbnail,
    images: product.images,
    description: product.description ?? "",
  };

  const initialValue = {
    ...initialProduct,
    attributes: Object.fromEntries(
      product.attributes.map((item) => [item.attribute.slug, item.value]),
    ),
  };
  return (
    <div>
      <PageHeader title="New Product" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">New Product</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ProductForm
            mode="edit"
            productId={productId}
            initialValue={initialValue}
          />
        </CardContent>
      </Card>
    </div>
  );
}
