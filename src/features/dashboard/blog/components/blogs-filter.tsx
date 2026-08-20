import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

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
  return (
    <div className="flex flex-col sm:flex-row items-center my-5">
      <form className="w-full">
        <Input
          placeholder="Search blogs..."
          className="bg-background rounded-3xl py-4.5 sm:max-w-[300px]"
        />
      </form>
      <div className="flex items-center sm:mt-0 mt-4">
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Status"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="DRAFT">Draft</SelectItem>
                <SelectItem value="PUBLISHED">Published</SelectItem>
                <SelectItem value="ARCHIVED">Archived</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Category"} />
            <SelectContent>
              <SelectGroup>
                {BLOG_CATEGORIES.map((category) => (
                  <SelectItem value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select>
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
