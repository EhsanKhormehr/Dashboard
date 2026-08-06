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
import ProductsFiltering from "./products-filtering";

const ProductsSidebarFilter = () => {
  return (
    <div className="bg-surface w-full rounded-2xl shadow-soft-card px-4 self-start py-7 sticky top-5">
     <ProductsFiltering />
    </div>
  );
};

export default ProductsSidebarFilter;
