"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Field, FieldGroup } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ProductsFiltering = () => {
  const [filters, setFilters] = useState({
    sortBy: "default",
    category: "default",
    sortOrder: "default",
    minPrice: 0,
    maxPrice: 100,
  });

  return (
    <div className="sticky top-0">
      <Accordion defaultValue={["brand"]} type="multiple">
        <AccordionItem value="price">
          <AccordionTrigger className="cursor-pointer font-bold text-[16px]">
            Price
          </AccordionTrigger>
          <AccordionContent className="py-10 px-2">
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
              <div className="flex justify-between border-1 rounded-md px-2 py-3">
                <span>Min</span>
                <span>{filters.minPrice}</span>
              </div>
              <div className="flex justify-between border-1 rounded-md px-2 py-3">
                <span>Max</span>
                <span>{filters.maxPrice}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger className="cursor-pointer font-bold text-[16px]">
            Brand
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <form>
              <div className="relative">
                <Input className="bg-muted pl-9 py-4.5" />
                <Search className="text-muted-foreground absolute left-3 top-1/2 size-5 -translate-y-1/2 pointer-events-none" />
              </div>
              <ScrollArea className="h-72 my-4">
                <FieldGroup>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="samsung" name="samsung" />
                    <Label
                      htmlFor="samsung"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Samsung
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="xiaomi" name="xiaomi" />
                    <Label
                      htmlFor="xiaomi"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Xiaomi
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="poco" name="poco" />
                    <Label
                      htmlFor="poco"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Poco
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="samsung" name="samsung" />
                    <Label
                      htmlFor="samsung"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Samsung
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="xiaomi" name="xiaomi" />
                    <Label
                      htmlFor="xiaomi"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Xiaomi
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="poco" name="poco" />
                    <Label
                      htmlFor="poco"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Poco
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                </FieldGroup>
              </ScrollArea>
            </form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="memory">
          <AccordionTrigger className="cursor-pointer font-bold text-[16px]">
            Brand
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <form>
              <div className="relative">
                <Input className="bg-muted pl-9 py-4.5" />
                <Search className="text-muted-foreground absolute left-3 top-1/2 size-5 -translate-y-1/2 pointer-events-none" />
              </div>
              <ScrollArea className="h-72 my-4">
                <FieldGroup>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="samsung" name="samsung" />
                    <Label
                      htmlFor="samsung"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Samsung
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="xiaomi" name="xiaomi" />
                    <Label
                      htmlFor="xiaomi"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Xiaomi
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="poco" name="poco" />
                    <Label
                      htmlFor="poco"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Poco
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="apple" name="apple" />
                    <Label
                      htmlFor="apple"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Apple
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="samsung" name="samsung" />
                    <Label
                      htmlFor="samsung"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Samsung
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="xiaomi" name="xiaomi" />
                    <Label
                      htmlFor="xiaomi"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Xiaomi
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <Checkbox id="poco" name="poco" />
                    <Label
                      htmlFor="poco"
                      className="w-full flex items-center font-bold text-base"
                    >
                      Poco
                      <span className="text-muted-foreground text-xs font-normal">
                        110
                      </span>
                    </Label>
                  </Field>
                </FieldGroup>
              </ScrollArea>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductsFiltering;
