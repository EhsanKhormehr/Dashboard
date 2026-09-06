"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import ProductsSwitchButton from "./products-switch-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brand, Category } from "../../../../../generated/prisma/client";
import { useUpdateUrlParams } from "@/hooks/use-update-url-params";

type ProductsFilteringProps = {
  isMobile?: boolean;
  categories: Category[];
  brands: Brand[];
  pricRange: {
    _min: {
      price: number | null;
    };
    _max: {
      price: number | null;
    };
  };
};

const ProductsFiltering = ({
  isMobile,
  categories,
  brands,
  pricRange,
}: ProductsFilteringProps) => {
  console.log(pricRange._max.price);
  const {
    getParam,
    updateParam,
    updatePriceParams,
    updateMultipleParam,
    clearParams,
    getParams,
  } = useUpdateUrlParams();
  const selectedCategories = getParams("category");
  const selectedBrands = getParams("brand");
  const minParam = getParam("min");
  const maxParam = getParam("max");
  const minPrice = minParam !== null ? Number(minParam) : 0;
  const maxPrice = maxParam !== null ? Number(maxParam) : pricRange._max.price;

  const [min, setMin] = useState<number>(minPrice ?? 0);
  const [max, setMax] = useState<number | null>(
    maxPrice ?? pricRange._max.price,
  );
  useEffect(() => {
    setMin(minPrice ?? 0);
    setMax(maxPrice ?? pricRange._max.price);
  }, [minPrice, maxPrice]);
  const isInStockParam = getParam("inStock");
  const isInStock = isInStockParam === "true";
  return (
    <div>
      <Accordion type="multiple">
        <AccordionItem value="category" className=" !border-b-0">
          <AccordionTrigger className="border border-gray-200 px-2 py-3 hover:no-underline shadow-soft-card">
            Category
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-3 pb-0">
            <ScrollArea className="mt-3 border rounded-lg px-3 py-3 h-[250px]">
              <FieldGroup className="my-2">
                {categories.map((category) => (
                  <Field orientation={"horizontal"} key={category.id}>
                    <Checkbox
                      id={category.slug}
                      name={category.slug}
                      checked={selectedCategories.includes(category.slug)}
                      onCheckedChange={(checked) => {
                        updateMultipleParam({
                          key: "category",
                          value: category.slug,
                          checked: Boolean(checked),
                        });
                      }}
                    />
                    <Label htmlFor={category.slug}>{category.name}</Label>
                  </Field>
                ))}
              </FieldGroup>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand" className="mt-4 !border-b-0">
          <AccordionTrigger className="border border-gray-200 px-2 py-3 hover:no-underline shadow-soft-card">
            Brand
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-3 pb-0">
            <ScrollArea className="mt-3 border rounded-lg px-3 py-3 h-[250px]">
              <FieldGroup className="my-2">
                {brands.map((brand) => (
                  <Field key={brand.id} orientation={"horizontal"}>
                    <Checkbox
                      id={brand.slug}
                      name={brand.slug}
                      checked={selectedBrands.includes(brand.slug)}
                      onCheckedChange={(checked) => {
                        updateMultipleParam({
                          key: "brand",
                          value: brand.slug,
                          checked: Boolean(checked),
                        });
                      }}
                    />
                    <Label htmlFor={brand.slug}>{brand.name}</Label>
                  </Field>
                ))}
              </FieldGroup>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Card className="mt-4 border rounded-lg pb-10">
        <CardHeader>
          <CardTitle>Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3">
            <div className="border rounded-md flex justify-between px-2 py-3 shadow-soft-card">
              <span className="font-bold">Min</span>
              <span>{min}</span>
            </div>
            <div className="border rounded-md flex justify-between px-2 py-3 shadow-soft-card">
              <span className="font-bold">Max</span>
              <span>{max}</span>
            </div>
          </div>
          <Slider
            value={[min, max!]}
            max={pricRange._max.price!}
            step={1}
            onValueChange={(value) => {
              setMin(value[0]);
              setMax(value[1]);
            }}
            onValueCommit={(value) => {
              updatePriceParams(value[0], value[1]);
            }}
            className="mt-7"
          />
        </CardContent>
      </Card>
      <ProductsSwitchButton idValue="discount" labelValue="Discount Only" />
      <ProductsSwitchButton
        idValue="isInStock"
        labelValue="In Stock Only"
        checked={isInStock}
        onCheckedChange={(checked) => {
          updateParam({
            key: "inStock",
            value: checked,
            defaultValue: false,
          });
        }}
      />
      <Button
        variant={"secondary"}
        className="mt-5 w-full py-5 cursor-pointer sticky"
        onClick={clearParams}
      >
        Clear All Filters
      </Button>
    </div>
  );
};

export default ProductsFiltering;
