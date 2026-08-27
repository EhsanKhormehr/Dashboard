"use client";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  blogFormDefaultValues,
  BlogFormInput,
  BlogFormValues,
  newBlogSchema,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledInput from "@/components/common/controlled-input";
import { Button } from "@/components/ui/button";
import BlogTextEditor from "./blog-text-editor";
import { ChevronDown, Plus, UploadCloud } from "lucide-react";
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
import { useCreateBlog, useUpdateBlog } from "../services/useMutation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import BlogTagForm from "./blog-tag-form";
import Link from "next/link";
import { useGetBlogTags } from "../services/useQueries";

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

type BlogFormProps = {
  mode: "edit" | "create";
  blogId?: string;
  initialValue?: BlogFormValues;
};

const BlogForm = ({ mode, initialValue, blogId }: BlogFormProps) => {
  const form = useForm<BlogFormInput, unknown, BlogFormValues>({
    defaultValues: initialValue ?? blogFormDefaultValues,
    resolver: zodResolver(newBlogSchema),
  });
  const { handleSubmit, control } = form;
  const { mutate: createBlog } = useCreateBlog();
  const { mutate: updateBlog } = useUpdateBlog();
  const { data: blogTags } = useGetBlogTags();
  const newBlogSubmitHandler = (data: BlogFormValues) => {
    if (mode === "create") {
      createBlog(data);
    }
    if (!blogId) return;
    if (mode === "edit") {
      updateBlog({ id: blogId, data });
    }
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
            <ControlledInput<BlogFormValues>
              name="readingTime"
              label="Reading Time"
              placeholder="Please enter reading time"
            />
            <Field>
              <FieldLabel>Tags</FieldLabel>
              <div className="flex w-full items-center gap-3">
                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        type="button"
                        className=" flex justify-between w-full"
                      >
                        <span>Tags</span>
                        <ChevronDown />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[var(--radix-popover-trigger-width)]">
                      <FieldGroup>
                        {blogTags?.map((tag) => (
                          <Field orientation={"horizontal"} key={tag.id}>
                            <Checkbox id={tag.id} name={tag.id} />
                            <Label htmlFor={tag.id} className="w-full">
                              {tag.name}
                            </Label>
                          </Field>
                        ))}
                      </FieldGroup>
                    </PopoverContent>
                  </Popover>
                </div>

                <Button type="button" asChild>
                  <Link href={"/dashboard/new-blog-tag"}>
                    <Plus className="size-4 cursor-pointer" />
                  </Link>
                </Button>
              </div>
            </Field>
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
            <Field>
              <FieldLabel>Status</FieldLabel>
              <Controller
                control={control}
                name="status"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="DRAFT">Draft</SelectItem>
                          <SelectItem value="PUBLISHED">Published</SelectItem>
                          <SelectItem value="ARCHIVED">Archived</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {error && <ErrorMessage text={error.message} />}
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
              <Button className="py-4.5" type="submit">
                {mode === "create" ? <Plus className="size-4" /> : ""}

                {mode === "create" ? " Create new Blog" : " Update Blog"}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </FormProvider>
  );
};

export default BlogForm;
