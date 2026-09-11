import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCommentsFilter from "@/features/dashboard/products/components/product-comments-filter";
import ProductCommentsTable from "@/features/dashboard/products/components/product-comments-table";
import React from "react";
import { CommentStatus } from "../../../../../generated/prisma/enums";
import { getProductComments } from "@/features/dashboard/products/services/actions";
import Pagination from "@/components/common/pagination";

type ProductCommentsProps = {
  searchParams: Promise<{
    search?: string;
    status?: CommentStatus | "DEFAULT";
    perPage?: string;
    page?: string;
  }>;
};

const ProductComments = async ({ searchParams }: ProductCommentsProps) => {
  const urlParams = await searchParams;
  const productComments = await getProductComments(urlParams);
  return (
    <div>
      <PageHeader title="Product Comments" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Product Comments</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ProductCommentsFilter />
          <ProductCommentsTable comments={productComments.comments} />
          <Pagination
            baseHref="/dasboard/product-comments"
            currentPage={productComments.page}
            pageSize={String(productComments.perPage)}
            totalItemsCount={productComments.totalCount}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductComments;
