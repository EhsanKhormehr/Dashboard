"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebouncedSearchParams } from "@/hooks/use-debounced-search-params";
import { updateUrlParams } from "@/lib/updateUrlParams";
import { useDebounce } from "@/lib/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TicketsFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const status = searchParams.get("status");
  const category = searchParams.get("category");
  const perPage = searchParams.get("perPage");

   const [searchValue , setSearchValue] = useDebouncedSearchParams()

  return (
    <div className="flex flex-col sm:flex-row items-center my-5">
      <form className="w-full">
        <Input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Search tickets..."
          className="bg-background rounded-3xl py-4.5 sm:max-w-[300px]"
        />
      </form>
      <div className="flex items-center sm:mt-0 mt-4">
        <Select
          value={status || "DEFAULT"}
          defaultValue="DEFAULT"
          onValueChange={(value) => {
            updateUrlParams({
              key: "status",
              value,
              pathname,
              router,
              searchParams,
            });
          }}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Status"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="DEFAULT">Default</SelectItem>
                <SelectItem value="OPEN">Open</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="ANSWERED">Answered</SelectItem>
                <SelectItem value="CLOSED">Closed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          value={category || "DEFAULT"}
          defaultValue="DEFAULT"
          onValueChange={(value) => {
            updateUrlParams({
              key: "category",
              value,
              pathname,
              router,
              searchParams,
            });
          }}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Category"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="DEFAULT">Default</SelectItem>
                <SelectItem value="ORDER">Order</SelectItem>
                <SelectItem value="PAYMENT">Payment</SelectItem>
                <SelectItem value="SHIPPING">Shipping</SelectItem>
                <SelectItem value="RETURN">Return</SelectItem>
                <SelectItem value="TECHNICAL">Technical</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          value={perPage || "12"}
          defaultValue="12"
          onValueChange={(value) => {
            updateUrlParams({
              key: "perPage",
              value,
              pathname,
              router,
              searchParams,
              defaultValue: "12",
            });
          }}
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

export default TicketsFilter;
