"use client";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { useGetProductBySlug } from "../services/useQueries";
import Link from "next/link";

const ProductInfoPanel = () => {
  const params = useParams();
  const slug = params.slug;
  const { data: product } = useGetProductBySlug(slug as string);
  if (!product) {
    return;
  }
  return (
    <div className="col-span-12 xl:col-span-6 bg-surface rounded-2xl relative shadow-soft-card p-5 self-start">
      <span className="block text-xs text-muted-foreground font-medium">
        {product?.brand}
      </span>
      <h1 className="text-lg sm:text-2xl font-black">{product?.name}</h1>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="fill-rating stroke-rating" />
          <Star className="fill-rating stroke-rating" />
          <Star className="fill-rating stroke-rating" />
          <Star className="fill-rating stroke-rating" />
          <Star className="stroke-muted-foreground/20 fill-muted-foreground/20" />
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground font-semibold">
          (124 Reviews)
        </span>
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-5 mt-5">
        {productSpecs.map((spec) => (
          <ProductInfoPanelBox
            key={spec.label}
            icon={spec.icon}
            label={spec.label}
            value={spec.value}
          />
        ))}
      </div> */}
      <p className="mt-5 text-sm text-muted-foreground font-medium">
        {product?.description}
      </p>
      <div className="flex items-center mt-5 gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {/* <span>
          SKU: <span className="text-surface-foreground">ROG-G16-2024-BL</span>
        </span> */}
        {/* <span className="w-px h-3 bg-surface-foreground/10"></span> */}
        <span>
          Category:
          <Link
            href={`/products/category/${product.category.slug}`}
            className="text-surface-foreground"
          >
            <span> {product.category.name}</span>
          </Link>
        </span>
      </div>
      <div className="mt-5 rounded-xl border-2 border-destructive border-dashed p-3 bg-destructive/10">
        <h4 className="font-extrabold text-destructive">
          ☂️ Return & Refund Policy
        </h4>
        <p className="text-sm text-destructive my-4">
          Returns are accepted only when the item is in its original condition.
          Sealed products are not eligible for return once opened.
        </p>
      </div>
    </div>
  );
};

export default ProductInfoPanel;
