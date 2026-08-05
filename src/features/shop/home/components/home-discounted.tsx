"use client";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import HomeDiscountedCard from "./home-discounted-card";

const discountedProducts = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    category: "Mobile",
    image: "/shop/iphone-14.png",
    price: 900,
    oldPrice: 1100,
    discount: 18,
  },
  {
    id: 2,
    title: "ASUS ROG Strix G16 Gaming Laptop",
    category: "Laptop",
    image: "/shop/iphone-14.png",
    price: 1450,
    oldPrice: 1800,
    discount: 19,
  },
  {
    id: 3,
    title: "Razer BlackShark V2 Pro Wireless Gaming Headset",
    category: "Headset",
    image: "/shop/iphone-14.png",
    price: 129,
    oldPrice: 179,
    discount: 28,
  },
  {
    id: 4,
    title: "Logitech G Pro X Superlight Mouse",
    category: "Mouse",
    image: "/shop/iphone-14.png",
    price: 99,
    oldPrice: 139,
    discount: 29,
  },
  {
    id: 5,
    title: "Samsung Odyssey G5 27 Inch Monitor",
    category: "Monitor",
    image: "/shop/iphone-14.png",
    price: 260,
    oldPrice: 330,
    discount: 21,
  },
  {
    id: 6,
    title: "Corsair Vengeance RGB 32GB DDR5 RAM",
    category: "RAM",
    image: "/shop/iphone-14.png",
    price: 115,
    oldPrice: 150,
    discount: 23,
  },
  {
    id: 7,
    title: "Intel Core i7 14700K Desktop Processor",
    category: "CPU",
    image: "/shop/iphone-14.png",
    price: 385,
    oldPrice: 450,
    discount: 14,
  },
  {
    id: 8,
    title: "PlayStation 5 DualSense Wireless Controller",
    category: "Gaming",
    image: "/shop/iphone-14.png",
    price: 59,
    oldPrice: 79,
    discount: 25,
  },
];

const HomeDiscountedProducts = () => {
  return (
    <MaxWidthWrapper>
      <ShopTitle title="Discounted Products" />
      <div className="bg-surface p-4 my-5 rounded-2xl">
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
          {discountedProducts.map((product) => (
            <SwiperSlide className="!h-auto flex">
              <HomeDiscountedCard
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
  );
};

export default HomeDiscountedProducts;
