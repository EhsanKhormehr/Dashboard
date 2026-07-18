"use client";
import React from "react";
import HomePagePromoGridCard from "./promo-grid-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HomePagePromoGrid = () => {
  return (
    <div className="mb-16">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction : false
          }),
        ]}
        opts={{
          align: "end",
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-0">
            <HomePagePromoGridCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-0">
            <HomePagePromoGridCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-0">
            <HomePagePromoGridCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-0">
            <HomePagePromoGridCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-0">
            <HomePagePromoGridCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-0">
            <HomePagePromoGridCard />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-0">
            <HomePagePromoGridCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomePagePromoGrid;
