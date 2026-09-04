"use client";
import ShopTitle from "@/components/common/shop-title";
import { Boxes } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductCard from "./product-card";
import { Autoplay } from "swiper/modules";
import { ProductGetPayload } from "../../../../../generated/prisma/models";

type ProductRelatedProps = {
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

const ProductRelated = ({ products }: ProductRelatedProps) => {
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="flex items-center">
        <Boxes className="text-primary size-[25px]" />
        <ShopTitle
          title="Related Products"
          isShape={false}
          className="ml-2 font-black"
        />
      </div>
      <div className="mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="related-products-slider"
          loop
          modules={[Autoplay]}
          autoplay
        >
          {products.map((product) => (
            <SwiperSlide className="!h-auto flex">
              <ProductCard
                category={product.category.name}
                price={product.price}
                image={product.thumbnail}
                title={product.name}
                categorySlug={product.category.name}
                slug={product.slug}
                // discount={product.discount}
                // oldPrice={product.oldPrice}
                key={product.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductRelated;
