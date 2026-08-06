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

const ProductsTopbarFilter = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="hidden lg:flex">
        <span className="font-bold">All Products / 40 Products Found</span>
      </div>
      <div className="grid grid-cols-2 lg:flex lg:items-center w-full lg:w-auto gap-5">
        <form className="relative hidden lg:flex">
          <Input
            placeholder="Search..."
            className="bg-surface py-6 w-[350px] pl-10"
          />
          <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground" />
        </form>
        <div>
          <Select>
            <SelectTrigger className="bg-surface py-6 px-4 w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="bestselling">Best Selling</SelectItem>
                <SelectItem value="pricelth">Price: Low to High</SelectItem>
                <SelectItem value="pricehtl">Price: High to Low</SelectItem>
                <SelectItem value="toprated">Top Rated</SelectItem>
                <SelectItem value="biggestdiscount">
                  Biggest Discount
                </SelectItem>
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
              <ProductsFiltering isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProductsTopbarFilter;
