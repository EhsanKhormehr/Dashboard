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
              src={"/banner-1.png"}
              width={1900}
              height={600}
              alt="banner"
              className=" w-full h-auto object-contain"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            <Image
              src={"/banner-2.png"}
              width={1900}
              height={600}
              alt="banner"
              className=" w-full h-auto object-contain"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
