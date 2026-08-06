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
import React, { useState } from "react";
import ProductsSwitchButton from "./products-switch-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const ProductsFiltering = () => {
 const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);

  return (
    <div>
       <Accordion type="multiple">
        <AccordionItem value="category" className=" !border-b-0">
          <AccordionTrigger className="border border-gray-200 px-2 py-3 hover:no-underline shadow-soft-card">
            Category
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-3 pb-0">
            <div className="mt-3 border rounded-lg px-3 py-3">
              <FieldGroup>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Laptop</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Laptop</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Laptop</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Laptop</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Laptop</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Laptop</Label>
                </Field>
              </FieldGroup>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand" className="mt-4 !border-b-0">
          <AccordionTrigger className="border border-gray-200 px-2 py-3 hover:no-underline shadow-soft-card">
            Brand
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden pt-3 pb-0">
            <div className="mt-3 border rounded-lg px-3 py-3">
              <FieldGroup>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Asus</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Amd</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Intel</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Razer</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Logitech</Label>
                </Field>
                <Field orientation={"horizontal"}>
                  <Checkbox id="Laptop" name="Laptop" />
                  <Label htmlFor="Laptop">Msi</Label>
                </Field>
              </FieldGroup>
            </div>
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
            defaultValue={[0, 100]}
            max={100}
            step={1}
            onValueChange={(value) => {
              setMin(value[0]);
              setMax(value[1]);
            }}
            className="mt-7"
          />
        </CardContent>
      </Card>
      <ProductsSwitchButton idValue="discount" labelValue="Discount Only" />
      <ProductsSwitchButton idValue="available" labelValue="In Stock Only" />
      <Button variant={"secondary"} className="mt-5 w-full py-5 cursor-pointer">Clear All Filters</Button>
    </div>
  )
}

export default ProductsFiltering
