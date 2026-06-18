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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function ProductsFilter() {
  const [sliderValue, setSliderValue] = useState([0, 100]);
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
          <div className="px-4 flex flex-col justify-between h-screen">
            <div>
              <Field className="mb-3">
                <FieldLabel className="font-semibold">Sort By</FieldLabel>
                <Select>
                  <SelectTrigger className="py-5">
                    <SelectValue placeholder="Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newset">Newset</SelectItem>
                    <SelectItem value="oldset">Oldset</SelectItem>
                    <SelectItem value="plth">Price:Low to High</SelectItem>
                    <SelectItem value="phtl">Price:High to Low</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="mb-3">
                <FieldLabel className="font-semibold">Category</FieldLabel>
                <Select>
                  <SelectTrigger className="py-5">
                    <SelectValue placeholder="Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="watch">Watch</SelectItem>
                    <SelectItem value="laptop">Laptop</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field className="mb-3">
                <FieldLabel className="font-semibold">Sort Order</FieldLabel>
                <Select>
                  <SelectTrigger className="py-5">
                    <SelectValue placeholder="Name" />
                  </SelectTrigger>
                  <SelectContent>
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
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    className="w-full"
                    onValueChange={setSliderValue}
                  />
                  <div className="grid grid-cols-2 mt-5 gap-4">
                    <div className="flex justify-between border-1 shadow-card rounded-md px-2 py-3">
                      <span>Min</span>
                      <span>{sliderValue[0]}</span>
                    </div>
                    <div className="flex justify-between border-1 shadow-card rounded-md px-2 py-3">
                      <span>Max</span>
                      <span>{sliderValue[1]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid">
              <Button
                className="py-6 mb-4 cursor-pointer ring bg-surface text-surface-foreground hover:bg-surface"
                type="reset"
              >
                Reset
              </Button>
              <Button className="py-6 mb-4 cursor-pointer " type="button">
                Apply Filters
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Button type="button" className="cursor-pointer py-4.5 font-semibold" asChild>
        <Link href={"/dashboard/new-products"}>
          Add Product
          <Plus className="size-5" />
        </Link>
      </Button>
    </div>
  );
}
