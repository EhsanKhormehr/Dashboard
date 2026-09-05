"use client";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useGetProductBySlug } from "../services/useQueries";
import { useParams } from "next/navigation";

type ProductImage = {
  id: number;
  src: string;
  alt: string;
};

export const productImages: ProductImage[] = [
  { id: 1, src: "/shop/iphone-14.png", alt: "آیفون ۱۴ - نمای روبرو" },
  { id: 2, src: "/shop/macbook.png", alt: "آیفون ۱۴ - نمای پشت" },
  { id: 3, src: "/shop/iphone-14.png", alt: "آیفون ۱۴ - نمای کناری" },
  { id: 4, src: "/shop/macbook.png", alt: "آیفون ۱۴ - در جعبه" },
  { id: 5, src: "/shop/iphone-14.png", alt: "آیفون ۱۴ - نمای کناری" },
  { id: 6, src: "/shop/macbook.png", alt: "آیفون ۱۴ - در جعبه" },
];

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const params = useParams();
  const slug = params.slug;
  const { data: product } = useGetProductBySlug(slug as string);
  if (!product) {
    return;
  }
  const productGallery = [
    product.thumbnail,
    ...product.images.filter((image) => image !== product.thumbnail),
  ];
  return (
    <div className="col-span-12 xl:col-span-6 bg-surface rounded-2xl relative shadow-soft-card">
      <div className="relative flex justify-center py-20 border-b ">
        <Image
          src={productGallery[activeIndex]}
          width={1000}
          height={1000}
          alt={product.thumbnail}
          className="object-cover aspect-video rounded-xl"
          priority
        />
      </div>
      <div className="p-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            500: {
              slidesPerView: 4,
            },
          }}
          className="product-gallery-slider"
        >
          {productGallery.map((image, index) => (
            <SwiperSlide
              key={image + index}
              className={`p-2 rounded-2xl bg-background border-2 border-transparent transition-all shadow-soft-card cursor-pointer  ${activeIndex === index && "!border-primary border-2"}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex justify-center items-center h-full">
                <Image
                  src={image}
                  width={500}
                  height={500}
                  className="object-cover aspect-video rounded-md"
                  alt={image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center absolute gap-2 top-5 left-4">
        <Button
          variant={"outline"}
          className="shadow-soft-card rounded-full size-[20px] border-0 cursor-pointer"
          asChild
        >
          <Heart className="size-[45px] hover:fill-destructive hover:stroke-destructive hover:scale-110" />
        </Button>
        <Button
          variant={"outline"}
          className="shadow-soft-card rounded-full size-[20px] border-0 cursor-pointer"
          asChild
        >
          <Share2 className="size-[45px] hover:fill-primary hover:stroke-primary hover:scale-110" />
        </Button>
      </div>
    </div>
  );
};

export default ProductGallery;
