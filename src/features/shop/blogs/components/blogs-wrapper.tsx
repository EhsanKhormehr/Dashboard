"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
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
import { Filter, Search } from "lucide-react";
import React from "react";
import BlogsFilter from "./blogs-filter";
import BlogsCard from "./blogs-card";
import { useUpdateUrlParams } from "@/hooks/use-update-url-params";
import { Prisma } from "../../../../../generated/prisma/client";

type BlogsWrapperProps = {
  articles: Prisma.BlogGetPayload<{
    include: {
      user: {
        select: {
          userName: true;
        };
      };
    };
  }>[];
};

const BlogsWrapper = ({ articles }: BlogsWrapperProps) => {
  const { updateParam } = useUpdateUrlParams();
  return (
    <div className="">
      <div className="grid grid-cols-2 lg:flex lg:items-center w-full lg:w-auto gap-5">
        <div>
          <Select
            defaultValue="LATEST"
            onValueChange={(value) => {
              updateParam({
                key: "sortBy",
                value: value,
                defaultValue: "LATEST",
              });
            }}
          >
            <SelectTrigger className="bg-surface py-6 px-4 w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="LATEST">Latest</SelectItem>
                <SelectItem value="OLDEST">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"outline"}
              className="bg-surface py-6 px-4 text-muted-foreground lg:hidden"
            >
              Filters <Filter />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="px-4 ">
              <BlogsFilter />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="mt-6 grid grid-cols-1 min-[410]:grid-cols-2 md:grid-cols-3 gap-5">
        {articles.map((article) => (
          <BlogsCard
            createdAt={article.createdAt}
            description={article.description}
            slug={article.slug}
            title={article.title}
            userName={article.user?.userName}
            key={article.id}
            thumbnail={article.thumbnail}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant={"outline"}
          className="h-11 px-20 cursor-pointer mt-6 font-bold "
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default BlogsWrapper;
