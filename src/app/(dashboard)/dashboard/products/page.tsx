import PageHeader from "@/components/common/page-header";
import {
  getCategories,
  getFilteredProducts,
} from "@/features/dashboard/products/services/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductsBasicFilter from "@/features/dashboard/products/components/products-basic.filter";
import ProductsTable from "@/features/dashboard/products/components/products-table";
import Pagination from "@/components/common/pagination";

type ProductsProps = {
  searchParams: Promise<{
    search?: string;
    status?: string;
    category?: string;
    sortBy?: string;
    perPage?: string;
    page?: string;
  }>;
};

export default async function Products({ searchParams }: ProductsProps) {
  const params = await searchParams;
  const filteredProducts = await getFilteredProducts(params);
  const categories = await getCategories();

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageHeader title="Products" />
      </div>
      <div className="mt-6">
        <Card className="shadow-card mt-6 py-8">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductsBasicFilter categories={categories} />
            <ProductsTable products={filteredProducts.products} />
            <Pagination
              baseHref="/dashboard/products"
              currentPage={filteredProducts.currentPage}
              pageSize={String(filteredProducts.perPage)}
              totalItemsCount={filteredProducts.totalCount}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
