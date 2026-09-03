"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateUrlParams } from "@/hooks/use-update-url-params";
import { Category } from "../../../../../generated/prisma/client";
import { useDebouncedSearchParams } from "@/hooks/use-debounced-search-params";

type ProductsBasicFilterProps = {
  categories: Category[];
};

const ProductsBasicFilter = ({ categories }: ProductsBasicFilterProps) => {
  const { getParam, updateParam } = useUpdateUrlParams();
  const [searchValue, setSearchValue] = useDebouncedSearchParams();
  const status = getParam("status");
  const category = getParam("category");
  const perPage = getParam("perPage");
  const sortBy = getParam("sortBy");

  return (
    <div className="flex flex-col sm:flex-row items-center my-5">
      <form className="w-full">
        <Input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search tickets..."
          className="bg-background rounded-3xl py-4.5 sm:max-w-[300px]"
        />
      </form>
      <div className="flex items-center sm:mt-0 mt-4">
        <Select
          defaultValue="ALL"
          onValueChange={(value) => {
            updateParam({
              key: "status",
              value,
              defaultValue: "ALL",
            });
          }}
          value={status ?? "ALL"}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Status"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ALL">All</SelectItem>
                <SelectItem value="OUTOFSTOCK">Out of Stock</SelectItem>
                <SelectItem value="INSTOCK">In Stock</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          defaultValue="ALL"
          onValueChange={(value) => {
            updateParam({
              key: "category",
              value,
              defaultValue: "ALL",
            });
          }}
          value={category ?? "ALL"}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Category"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ALL">All</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          defaultValue="DEFAULT"
          onValueChange={(value) => {
            updateParam({
              key: "sortBy",
              value,
              defaultValue: "DEFAULT",
            });
          }}
          value={sortBy ?? "DEFAULT"}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Category"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="DEFAULT">Default</SelectItem>
                <SelectItem value="NEWEST">Newest</SelectItem>
                <SelectItem value="OLDEST">Oldest</SelectItem>
                <SelectItem value="PRICEASC">Price:Low to High</SelectItem>
                <SelectItem value="PRICEDESC">Price:High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          defaultValue="12"
          onValueChange={(value) => {
            updateParam({
              key: "perPage",
              value,
              defaultValue: "12",
            });
          }}
          value={perPage ?? "12"}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Tickets per page"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="48">48</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
    </div>
  );
};

export default ProductsBasicFilter;
