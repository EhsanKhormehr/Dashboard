"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import HomePageProductCard from "../../home/components/product-card";
import Pagination from "@/components/common/pagination";

import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import ProductsFiltering from "./products-filtering";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductsFilteringMobile from "./products-filtering-mobile";

const ProductsWrapper = () => {
  const [sortValue, setSortValue] = useState<string>("rating");
  return (
    <div>
      <div className="grid grid-cols-2 lg:flex lg:justify-between lg:flex-row-reverse items-center w-full ">
        <div className="justify-self-start lg:hidden">
          <ProductsFilteringMobile />
        </div>

        <div className="justify-self-end">
          <Select
            value={sortValue}
            onValueChange={(value) => {
              setSortValue(value);
            }}
          >
            <SelectTrigger className="p-5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="rating">By rating</SelectItem>
                <SelectItem value="price">By Price</SelectItem>
                <SelectItem value="order">By Order</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <span className="font-bold text-muted-foreground">
            Selected Products: <span className="text-black">85</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
      </div>
      <Pagination
        baseHref="/"
        currentPage={1}
        pageSize="20"
        totalItemsCount={30}
      />
    </div>
  );
};

export default ProductsWrapper;
