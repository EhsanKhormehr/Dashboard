import { ProductGetPayload } from "../../../../../generated/prisma/models";
import ProductCard from "./product-card";

type ProductsWrapperProps = {
  products: ProductGetPayload<{
    include: {
      category: {
        select: {
          name: true;
          slug: true;
        };
      };
    };
  }>[];
};

const ProductsWrapper = async ({ products }: ProductsWrapperProps) => {

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            category={product.category.name}
            image={product.thumbnail}
            price={product.price}
            title={product.name}
            key={product.id}
            slug={product.slug}
            categorySlug={product.category.slug}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8"></div>
    </div>
  );
};

export default ProductsWrapper;
