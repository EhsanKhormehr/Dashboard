"use client";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        className="home-banner-swiper "
      >
        <SwiperSlide>
          <Link href={"/"}>
            <Image
              src={"/shop/banner-1.png"}
              width={1900}
              height={300}
              alt="banner"
              className=" w-full h-[200px] sm:h-[300px] lg:h-[400px]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            <Image
              src={"/shop/banner-2.png"}
              width={1900}
              height={300}
              alt="banner"
              className=" w-full h-[200px] sm:h-[300px] lg:h-[400px]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            <Image
              src={"/shop/banner-1.png"}
              width={1900}
              height={300}
              alt="banner"
              className=" w-full h-[200px] sm:h-[300px] lg:h-[400px]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            <Image
              src={"/shop/banner-2.png"}
              width={1900}
              height={300}
              alt="banner"
              className=" w-full h-[200px] sm:h-[300px] lg:h-[400px]"
            />
          </Link>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default HomeBanner;
