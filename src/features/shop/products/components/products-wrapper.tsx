import React from "react";
import ProductCard from "./product-card";
import { getProducts } from "../services/actions";
import Pagination from "@/components/common/pagination";

const ProductsWrapper = async () => {
  const products = await getProducts();
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
      <div className="flex justify-center mt-8">
      </div>
    </div>
  );
};

export default ProductsWrapper;
