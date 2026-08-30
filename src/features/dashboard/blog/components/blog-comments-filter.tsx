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
import { useUpdateUrlParams } from "@/hooks/use-update-url-params";
import React from "react";

const BlogCommentsFilter = () => {
  const [searchValue, setSearchValue] = useDebouncedSearchParams();
  const { getParam, updateParam } = useUpdateUrlParams();

  const status = getParam("status");
  const perPage = getParam("perPage");
  return (
    <div className="flex flex-col sm:flex-row items-center my-5">
      <form className="w-full">
        <Input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search blogs..."
          className="bg-background rounded-3xl py-4.5 sm:max-w-[300px]"
        />
      </form>
      <div className="flex items-center sm:mt-0 mt-4">
        <Select
          defaultValue={status ?? "DEFAULT"}
          onValueChange={(value) => {
            updateParam({
              key: "status",
              value,
            });
          }}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Status"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="DEFAULT">Default</SelectItem>
                <SelectItem value="APPROVED">Approved</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select
          defaultValue={perPage ?? "12"}
          onValueChange={(value) => {
            updateParam({
              key: "perPage",
              value,
              defaultValue: "12",
            });
          }}
        >
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Comments per page"} />
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

export default BlogCommentsFilter;
