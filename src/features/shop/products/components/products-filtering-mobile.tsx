import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Filter } from "lucide-react";
import ProductsFiltering from "./products-filtering";
const ProductsFilteringMobile = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="bg-white p-5">
            Filters
            <Filter />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="inset-0 h-screen">
          <ScrollArea className="h-full">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">Filters</SheetTitle>
            </SheetHeader>
            <div className="px-4">
              <ProductsFiltering />
            </div>
            <div className="px-4">
              <Button type="submit" className="w-full py-6 mt-5">
                Apply
              </Button>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductsFilteringMobile;
