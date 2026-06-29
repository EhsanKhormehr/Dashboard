"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useCategories } from "../../categories/services/useQueries";

export default function ProductsFilter() {
  const [filters, setFilters] = useState({
    sortBy: "default",
    category: "default",
    sortOrder: "default",
    minPrice: 0,
    maxPrice: 100,
  });
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { data: categories } = useCategories();

  const filterHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (filters.sortBy && filters.sortBy !== "default") {
      params.set("sortBy", filters.sortBy);
    } else {
      params.delete("sortBy");
    }

    if (filters.category && filters.category !== "default") {
      params.set("category", filters.category);
    } else {
      params.delete("category");
    }

    if (filters.sortOrder && filters.sortOrder !== "default") {
      params.set("sortOrder", filters.sortOrder);
    } else {
      params.delete("sortOrder");
    }

    if (filters.minPrice !== 0) {
      params.set("minPrice", String(filters.minPrice));
    } else {
      params.delete("minPrice");
    }

    if (filters.maxPrice !== 100) {
      params.set("maxPrice", String(filters.maxPrice));
    } else {
      params.delete("maxPrice");
    }

    params.set("page", "1");
    router.replace(`${pathName}?${params}`);
  };

  const resetHandler = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("sortBy");
    params.delete("category");
    params.delete("sortOrder");
    params.delete("minPrice");
    params.delete("maxPrice");

    params.set("page", "1");

    router.replace(`${pathName}?${params.toString()}`);

    setFilters({
      sortBy: "default",
      category: "default",
      sortOrder: "default",
      minPrice: 0,
      maxPrice: 100,
    });
  };

  return (
    <div className="flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" className="cursor-pointer py-4.5 mr-2">
            <Filter />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-surface">
          <SheetHeader>
            <SheetTitle className="font-bold text-xl">
              Filter Product
            </SheetTitle>
          </SheetHeader>
          <form
            onSubmit={(e) => filterHandler(e)}
            className="flex flex-col justify-between h-screen"
          >
            <div className="px-4 ">
              <Field className="mb-3">
                <FieldLabel className="font-semibold">Sort By</FieldLabel>
                <Select
                  value={filters.sortBy}
                  onValueChange={(value) => {
                    setFilters((prev) => ({ ...prev, sortBy: value }));
                  }}
                >
                  <SelectTrigger className="py-5">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="newest">Newset</SelectItem>
                    <SelectItem value="oldest">Oldset</SelectItem>
                    <SelectItem value="price-asc">Price:Low to High</SelectItem>
                    <SelectItem value="price-desc">Price:High to Low</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="mb-3">
                <FieldLabel className="font-semibold">Category</FieldLabel>
                <Select
                  value={filters.category}
                  onValueChange={(value) => {
                    setFilters((prev) => ({ ...prev, category: value }));
                  }}
                >
                  <SelectTrigger className="py-5">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    {categories?.map((category) => (
                      <SelectItem value={category.id} key={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field className="mb-3">
                <FieldLabel className="font-semibold">Sort Order</FieldLabel>
                <Select
                  value={filters.sortOrder}
                  onValueChange={(value) => {
                    setFilters((prev) => ({ ...prev, sortOrder: value }));
                  }}
                >
                  <SelectTrigger className="py-5">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="des">Descending</SelectItem>
                    <SelectItem value="asc">Ascending</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Card className="border-1 shadow-card mt-7">
                <CardHeader>
                  <CardTitle className="font-semibold">Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <Slider
                    value={[filters.minPrice, filters.maxPrice]}
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    className="w-full"
                    onValueChange={(value) => {
                      setFilters((prev) => ({
                        ...prev,
                        minPrice: value[0],
                        maxPrice: value[1],
                      }));
                    }}
                  />
                  <div className="grid grid-cols-2 mt-5 gap-4">
                    <div className="flex justify-between border-1 shadow-card rounded-md px-2 py-3">
                      <span>Min</span>
                      <span>{filters.minPrice}</span>
                    </div>
                    <div className="flex justify-between border-1 shadow-card rounded-md px-2 py-3">
                      <span>Max</span>
                      <span>{filters.maxPrice}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <SheetFooter>
              <Button
                className="py-6 mb-4 cursor-pointer ring bg-surface text-surface-foreground hover:bg-surface"
                type="reset"
                onClick={resetHandler}
              >
                Reset
              </Button>
              <Button className="py-6 mb-4 cursor-pointer" type="submit">
                Apply Filters
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
      <Button
        type="button"
        className="cursor-pointer py-4.5 font-semibold"
        asChild
      >
        <Link href={"/dashboard/new-products"}>
          Add Product
          <Plus className="size-5" />
        </Link>
      </Button>
    </div>
  );
}
