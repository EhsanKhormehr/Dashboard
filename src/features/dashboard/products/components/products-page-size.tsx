"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function ProductsPageSize() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentLimit = searchParams.get("limit") ?? "8";

  const pageSizeHandler = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", value);
    params.set("page", "1");
    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Select  value={currentLimit} onValueChange={(value) => pageSizeHandler(value)}>
      <SelectTrigger>
        <SelectValue placeholder="Page Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="8">8 / page</SelectItem>
          <SelectItem value="16">16 / page</SelectItem>
          <SelectItem value="32">32 / page</SelectItem>
          <SelectItem value="64">64 / page</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
