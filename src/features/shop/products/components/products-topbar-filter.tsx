"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, Search } from "lucide-react";
import React from "react";
import ProductsFiltering from "./products-filtering";
import { useUpdateUrlParams } from "@/hooks/use-update-url-params";
import { useDebouncedSearchParams } from "@/hooks/use-debounced-search-params";
import { Brand, Category } from "../../../../../generated/prisma/client";

type ProductsTopbarFilterProps = {
  categories: Category[];
  brands: Brand[];
  productCount: number;
};

const ProductsTopbarFilter = ({
  categories,
  brands,
  productCount,
}: ProductsTopbarFilterProps) => {
  const { getParam, updateParam } = useUpdateUrlParams();
  const search = getParam("search");
  const [searchValue, setSearchValue] = useDebouncedSearchParams({
    initValue: search ?? "",
  });
  const sortBy = getParam("sortBy");
  return (
    <div className="flex justify-between items-center">
      <div className="hidden lg:flex">
        <span className="font-bold">
          Products / {productCount} Products Found
        </span>
      </div>
      <div className="grid grid-cols-2 lg:flex lg:items-center w-full lg:w-auto gap-5">
        <div className="relative hidden lg:flex">
          <Input
            placeholder="Search..."
            className="bg-surface py-6 w-[350px] pl-10"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground" />
        </div>
        <div>
          <Select
            onValueChange={(value) => {
              updateParam({
                key: "sortBy",
                value,
                defaultValue: "DEFAULT",
              });
            }}
            value={sortBy ?? "DEFAULT"}
          >
            <SelectTrigger className="bg-surface py-6 px-4 w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="DEFAULT">Default</SelectItem>
                <SelectItem value="NEWEST">Newest</SelectItem>
                <SelectItem value="OLDEST">Oldest</SelectItem>
                <SelectItem value="PRICEHTL">Price: High to Low</SelectItem>
                <SelectItem value="PRICELTH">Price: Low to High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"outline"}
              className="bg-surface py-6 px-4 text-muted-foreground lg:hidden"
            >
              Filters <Filter />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="px-4 ">
              <ProductsFiltering
                isMobile={true}
                categories={categories}
                brands={brands}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProductsTopbarFilter;
