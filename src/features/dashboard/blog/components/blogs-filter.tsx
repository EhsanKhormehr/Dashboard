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
import { updateUrlParams } from "@/lib/updateUrlParams";
import { useDebounce } from "@/lib/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BLOG_CATEGORIES = [
  { value: "hardware", label: "Hardware" },
  { value: "news", label: "News" },
  { value: "technology", label: "Technology" },
  { value: "buying-guide", label: "Buying Guide" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
  { value: "gaming", label: "Gaming" },
  { value: "learning", label: "Learning" },
  { value: "it-information", label: "IT & Information" },
  { value: "reviews", label: "Reviews" },
];

const BlogsFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const status = searchParams.get("status");
  const category = searchParams.get("category");
  const perPage = searchParams.get("perPage");
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );
  const debouncedSearch = useDebounce(searchValue, 500);
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }

    router.replace(`${pathname}?${params}`);
  }, [debouncedSearch]);
  
  return (
    <div className="flex flex-col sm:flex-row items-center my-5">
      <form className="w-full">
        <Input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Search blogs..."
          className="bg-background rounded-3xl py-4.5 sm:max-w-[300px]"
        />
      </form>
      <div className="flex items-center sm:mt-0 mt-4">
        <Select
          defaultValue={status ?? "DEFAULT"}
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
                <SelectItem value="DRAFT">Draft</SelectItem>
                <SelectItem value="PUBLISHED">Published</SelectItem>
                <SelectItem value="ARCHIVED">Archived</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          defaultValue={category ?? "DEFAULT"}
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
                {BLOG_CATEGORIES.map((category) => (
                  <SelectItem value={category.value} key={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          defaultValue={perPage ?? "12"}
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

export default BlogsFilter;
