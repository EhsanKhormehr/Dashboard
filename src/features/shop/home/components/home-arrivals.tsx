"use client";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import ProductCard from "../../products/components/product-card";

export const arrivals = [
  {
    id: 1,
    title: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    category: "Mobile",
    image: "/iphone-14.png",
    price: 1199,
    oldPrice: 1299,
    discount: 8,
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    category: "Headset",
    image: "/iphone-14.png",
    price: 349,
  },
  {
    id: 3,
    title: "Samsung Odyssey G5 27 Inch QHD Gaming Monitor",
    category: "Monitor",
    image: "/iphone-14.png",
    price: 260,
    oldPrice: 330,
    discount: 21,
  },
  {
    id: 4,
    title: "Logitech MX Master 3S Wireless Performance Mouse",
    category: "Mouse",
    image: "/iphone-14.png",
    price: 89,
  },
  {
    id: 5,
    title: "ASUS ROG Strix G16 Gaming Laptop RTX 4060",
    category: "Laptop",
    image: "/iphone-14.png",
    price: 1399,
    oldPrice: 1549,
    discount: 10,
  },
  {
    id: 6,
    title: "Corsair Vengeance RGB 32GB DDR5 6000MHz RAM",
    category: "RAM",
    image: "/iphone-14.png",
    price: 115,
  },
  {
    id: 7,
    title: "Intel Core i7 14700K Desktop Processor",
    category: "CPU",
    image: "/iphone-14.png",
    price: 385,
    oldPrice: 450,
    discount: 14,
  },
  {
    id: 8,
    title: "Apple MacBook Air 13 Inch M3 8GB 256GB",
    category: "Laptop",
    image: "/iphone-14.png",
    price: 999,
  },
];

const HomeArrivals = () => {
  return (
    <MaxWidthWrapper className="mt-15">
      <ShopTitle title="New Arrivals" />
      <div className="bg-surface p-4 my-3 rounded-2xl">
        <Swiper
          className="discounted-slider !px-2"
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1700,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {arrivals.map((product) => (
            <SwiperSlide className="!h-auto flex">
              <ProductCard
                title={product.title}
                category={product.category}
                discount={product.discount}
                oldPrice={product.oldPrice}
                image={product.image}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MaxWidthWrapper>
  )
}

export default HomeArrivals
