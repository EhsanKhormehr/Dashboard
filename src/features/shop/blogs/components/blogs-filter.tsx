import ShopTitle from "@/components/common/shop-title";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutGrid, Search } from "lucide-react";
import React from "react";

const BLOG_CATEGORIES = [
  { label: "Hardware" },
  { label: "News" },
  { label: "Technology" },
  { label: "Buying Guide" },
  { label: "Artificial Intelligence" },
  { label: "Gaming" },
  { label: "Learning" },
  { label: "IT & Information" },
  { label: "Reviews" },
];

const BlogsFilter = () => {
  return (
    <div>
      <form className="relative hidden lg:flex">
        <Input
          placeholder="Search articles..."
          type="text"
          className="h-13 pl-10 border-0 !bg-surface shadow-soft-card"
        />
        <Search className="absolute top-1/2 left-3 -translate-y-1/2 h-full text-muted-foreground" />
      </form>
      <div className="lg:mt-6 bg-surface rounded-lg p-4 shadow-soft-card">
        <div className="flex items-center border-b pb-2">
          <LayoutGrid className="size-5" />
          <span className="ml-2 font-extrabold text-lg">Categories</span>
        </div>
        <ScrollArea className="h-70 py-4">
          <FieldGroup>
            {BLOG_CATEGORIES.map((category) => (
              <Field orientation={"horizontal"} key={category.label} className="flex items-center ">
                <Checkbox id={category.label} name={category.label} className="[&_svg]:hidden cursor-pointer" />
                <Label htmlFor={category.label} className="font-bold w-full cursor-pointer">{category.label}</Label>
              </Field>
            ))}
          </FieldGroup>
        </ScrollArea>
      </div>
    </div>
  );
};

export default BlogsFilter;
