"use client";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
  { id: 3, src: "/shop/iphone-14.png", alt: "آیفون ۱۴ - نمای کناری" },
  { id: 4, src: "/shop/macbook.png", alt: "آیفون ۱۴ - در جعبه" },
];

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="col-span-6 bg-surface rounded-2xl relative shadow-soft-card">
      <div className="relative flex justify-center py-10 border-b h-[400px]">
        <Image src={productImages[activeIndex].src} width={300} height={300} alt={productImages[activeIndex].alt} className="object-contain" priority />
      </div>
      <div className="p-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          className="product-gallery-slider"
        >
          {productImages.map((image, index) => (
            <SwiperSlide
              className={`p-2.5 rounded-2xl bg-background border-2 border-transparent transition-all shadow-soft-card cursor-pointer !h-[90px] ${activeIndex === index && "!border-primary border-2"}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex justify-center items-center h-full">
                <Image src={image.src} width={50} height={50} alt={image.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col absolute top-5 left-4">
        <Button
          variant={"outline"}
          className="shadow-soft-card rounded-full size-[20px] border-0 cursor-pointer"
          asChild
        >
          <Heart className="size-[45px] hover:fill-destructive hover:stroke-destructive hover:scale-110" />
        </Button>
        <Button
          variant={"outline"}
          className="shadow-soft-card rounded-full size-[20px] border-0 cursor-pointer mt-3"
          asChild
        >
          <Share2 className="size-[45px] hover:fill-primary hover:stroke-primary hover:scale-110" />
        </Button>
      </div>
    </div>
  );
};

export default ProductGallery;
