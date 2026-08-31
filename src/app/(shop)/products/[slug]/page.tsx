import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ProductBreadcrumb from "@/features/shop/products/components/product-breadcrumb";
import ProductExpertReview from "@/features/shop/products/components/product-expert-review";
import ProductInfoWrapper from "@/features/shop/products/components/product-info-wrapper";
import ProductPurchasePanel from "@/features/shop/products/components/product-purchase-panel";
import ProductRelated from "@/features/shop/products/components/product-related";
import ProductReviews from "@/features/shop/products/components/product-reviews";
import ProductSectionsNav from "@/features/shop/products/components/product-sections-nav";
import ProductSpecifications from "@/features/shop/products/components/product-specifications";
import { getProductBySlug } from "@/features/shop/products/services/actions";
import React from "react";

type ProductProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Product = async ({ params }: ProductProps) => {
  const urlParams = await params;
  const slug = urlParams.slug;
  const product = await getProductBySlug(slug);
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <MaxWidthWrapper>
      {/* <ProductBreadcrumb /> */}
      <div className="grid grid-cols-12 mt-10 gap-5 relative">
        <ProductInfoWrapper />
        <ProductPurchasePanel price={product.price} />
        <ProductSectionsNav />
        <ProductSpecifications attributes={product.attributes} />
        <ProductExpertReview content={product.content} />
        <ProductRelated />
        <ProductReviews />
      </div>
    </MaxWidthWrapper>
  );
};

export default Product;
