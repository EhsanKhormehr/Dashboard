"use client";
import ShopTitle from "@/components/common/shop-title";
import { Boxes } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductCard from "./product-card";
import { Autoplay } from "swiper/modules";

export const relatedProducts = [
  {
    title: "Wireless Bluetooth Headphones",
    category: "Audio",
    image: "/shop/iphone-14.png",
    price: 89.99,
    oldPrice: 119.99,
    discount: 25,
  },
  {
    title: "Smart Fitness Watch",
    category: "Wearables",
    image: "/shop/iphone-14.png",
    price: 149.99,
    oldPrice: 199.99,
    discount: 25,
  },
  {
    title: "Portable Bluetooth Speaker",
    category: "Audio",
    image: "/shop/iphone-14.png",
    price: 59.99,
    oldPrice: 79.99,
    discount: 20,
  },
  {
    title: "USB-C Fast Charger",
    category: "Accessories",
    image: "/shop/iphone-14.png",
    price: 24.99,
  },
  {
    title: "Ergonomic Wireless Mouse",
    category: "Computer Accessories",
    image: "/shop/iphone-14.png",
    price: 39.99,
    oldPrice: 49.99,
    discount: 20,
  },
  {
    title: "Mechanical Gaming Keyboard",
    category: "Gaming",
    image: "/shop/iphone-14.png",
    price: 129.99,
    oldPrice: 159.99,
    discount: 19,
  },
];

const ProductRelated = () => {
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
            1280 : {
                slidesPerView : 3
            }
          }}
          className="related-products-slider"
          loop
          modules={[Autoplay]}
          autoplay
        >
          {relatedProducts.map((product) => (
            <SwiperSlide className="!h-auto flex">
              <ProductCard
                category={product.category}
                price={product.price}
                image={product.image}
                title={product.title}
                discount={product.discount}
                oldPrice={product.oldPrice}
                key={product.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductRelated;
