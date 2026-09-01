"use client";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import React, { useState } from "react";
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
import { useCreateBlog, useUpdateBlog } from "../services/useMutation";
import Link from "next/link";
import { useGetBlogTags } from "../services/useQueries";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import Image from "next/image";

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
  const anchor = useComboboxAnchor();
  const [preview, setPreview] = useState<string | undefined>("");
  const normalizeThumbnail = (thumbnail: string) => {
    return `/${thumbnail.replace(/^\/+/, "")}`;
  };
  const imageChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const previewImage = URL.createObjectURL(file);
    setPreview(previewImage);
  };

  const newBlogSubmitHandler = (data: BlogFormValues) => {
    const imageUrl = normalizeThumbnail(data.thumbnail);
    console.log(imageUrl);
    if (mode === "create") {
      createBlog({
        title: data.title,
        category: data.category,
        description: data.description,
        content: data.content,
        readingTime: data.readingTime,
        slug: data.slug,
        status: data.status,
        tags: data.tags,
        thumbnail: imageUrl,
      });
    }
    if (mode === "edit") {
      if (!blogId) {
        throw new Error("id not found");
      }
      updateBlog({
        id: blogId,
        data: {
          title: data.title,
          category: data.category,
          description: data.description,
          content: data.content,
          readingTime: data.readingTime,
          slug: data.slug,
          status: data.status,
          tags: data.tags,
          thumbnail: imageUrl,
        },
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(newBlogSubmitHandler)}>
        <FieldSet>
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
            <div className="sm:col-span-2">
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
              <div className="flex w-full items-center gap-3 flex-wrap sm:flex-nowrap">
                <Controller
                  control={control}
                  name="tags"
                  render={({ field }) => (
                    <Combobox
                      multiple
                      autoHighlight
                      items={blogTags ?? []}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      value={field.value ?? []}
                    >
                      <ComboboxChips ref={anchor} className={"w-full"}>
                        <ComboboxValue>
                          {(values) => (
                            <>
                              {values.map((tagId: string) => {
                                const tag = blogTags?.find(
                                  (item) => item.id === tagId,
                                );
                                return (
                                  <ComboboxChip
                                    key={tagId}
                                    className={"bg-background font-bold"}
                                  >
                                    {tag?.name}
                                  </ComboboxChip>
                                );
                              })}
                              <ComboboxChipsInput />
                            </>
                          )}
                        </ComboboxValue>
                      </ComboboxChips>
                      <ComboboxContent anchor={anchor}>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                          {(item) => {
                            return (
                              <ComboboxItem key={item.id} value={item.id}>
                                {item.name}
                              </ComboboxItem>
                            );
                          }}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  )}
                />

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
            <Controller
              control={control}
              name="thumbnail"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Label htmlFor="upload" className="inline">
                    <div className="group border-2 border-dashed border-muted-foreground/30 p-8 rounded-xl  cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200">
                      {initialValue?.thumbnail && !preview && (
                        <div className="flex h-[360px] items-center justify-center overflow-hidden">
                          <Image
                            src={initialValue.thumbnail}
                            width={1000}
                            height={1000}
                            alt="Blog thumbnail preview"
                            className="h-full w-full object-contain "
                          />
                        </div>
                      )}
                      {preview && (
                        <div className="flex h-[360px] items-center justify-center overflow-hidden">
                          <Image
                            src={preview}
                            width={1000}
                            height={1000}
                            alt="Blog thumbnail preview"
                            className="h-full w-full object-contain "
                          />
                        </div>
                      )}
                      {!preview && !initialValue?.thumbnail && (
                        <div className="flex flex-col justify-center items-center">
                          <div className="p-3 bg-muted/50 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                            <UploadCloud className="size-8 text-muted-foreground group-hover:text-primary" />
                          </div>
                          <span className="font-semibold text-muted-foreground mt-3 group-hover:text-primary">
                            Browse file to upload
                          </span>
                          <span className="text-xs text-muted-foreground/70 mt-1">
                            PNG, JPG or WebP (Max 5MB)
                          </span>
                        </div>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        onChange={(event) => {
                          field.onChange(event.target.files?.[0].name);
                          imageChangeHandler(event);
                        }}
                        id="upload"
                        accept="image/*"
                      />
                    </div>
                    {error && <ErrorMessage text={error.message} />}
                  </Label>
                </>
              )}
            />
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
