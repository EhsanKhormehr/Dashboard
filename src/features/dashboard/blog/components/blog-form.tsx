"use client";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  blogFormDefaultValues,
  BlogFormValues,
  newBlogSchema,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledInput from "@/components/common/controlled-input";
import { Button } from "@/components/ui/button";
import BlogTextEditor from "./blog-text-editor";
import { Plus, UploadCloud } from "lucide-react";
import ControlledTextarea from "@/components/common/controlled-textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorMessage from "@/components/common/error-message";

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

const BlogForm = () => {
  const form = useForm<BlogFormValues>({
    defaultValues: blogFormDefaultValues,
    resolver: zodResolver(newBlogSchema),
  });
  const { handleSubmit, control } = form;
  const newBlogSubmitHandler = (data: BlogFormValues) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(newBlogSubmitHandler)}>
        <FieldSet>
          <FieldGroup className="grid grid-cols-2 gap-8">
            <ControlledInput<BlogFormValues>
              name="title"
              label="Title"
              placeholder="Please enter title"
            />
            <ControlledInput<BlogFormValues>
              name="slug"
              label="Slug"
              placeholder="Please enter slug"
            />
            <div className="col-span-2">
              <ControlledTextarea<BlogFormValues>
                name="description"
                label="Description"
                placeholder="Please enter description"
              />
            </div>
            <Field>
              <FieldLabel>Category</FieldLabel>
              <Controller
                control={control}
                name="category"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {BLOG_CATEGORIES.map((category) => (
                            <SelectItem
                              value={category.value}
                              key={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <ErrorMessage text={error?.message} />
                  </>
                )}
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="mb-6 ">
            <FieldLabel>Thumbnail</FieldLabel>
            <Label htmlFor="upload" className="inline">
              <div className="group border-2 border-dashed border-muted-foreground/30 p-8 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200">
                <div className="p-3 bg-muted/50 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                  <UploadCloud className="size-8 text-muted-foreground group-hover:text-primary" />
                </div>
                <span className="font-semibold text-muted-foreground mt-3 group-hover:text-primary">
                  Browse file to upload
                </span>
                <span className="text-xs text-muted-foreground/70 mt-1">
                  PNG, JPG or WebP (Max 5MB)
                </span>
                <input type="file" className="hidden" id="upload" />
              </div>
            </Label>
          </FieldGroup>
          <FieldGroup>
            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <BlogTextEditor onChange={field.onChange} value={field.value} />
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Field orientation={"horizontal"}>
              <Button className="py-4.5">
                <Plus className="size-4" />
                Create new Blog
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </FormProvider>
  );
};

export default BlogForm;
