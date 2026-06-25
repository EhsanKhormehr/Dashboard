"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useMemo, useState } from "react";
import { useCategories } from "../../categories/services/useQueries";
import { useCategoryAttributes } from "../services/useQueries";
import { Controller, useForm } from "react-hook-form";
import {
  basicInfoDefaultValues,
  BasicInfoFormValues,
  basicInfoSchema,
  buildProductSchema,
  ProductFormValues,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCreateNewProduct } from "../services/useMutation";
import ErrorMessage from "@/components/common/error-message";

export default function ProductForm() {
  const { data: categories } = useCategories();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const { data: categoryAttributes } =
    useCategoryAttributes(selectedCategoryId);

  const schema = useMemo(
    () => buildProductSchema(categoryAttributes?.attributes ?? []),
    [categoryAttributes?.attributes],
  );

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(schema),
    defaultValues: basicInfoDefaultValues,
    mode: "onChange",
  });

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = form;

  const { mutate, isPending } = useCreateNewProduct();

  const submitProductForm = (data: ProductFormValues) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submitProductForm)}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend className="font-bold">Basic information</FieldLegend>
          <FieldGroup className="grid grid-cols-2">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input type="text" {...field} />

                  {errors.name && <ErrorMessage text={errors.name.message} />}
                </Field>
              )}
            />
            <Controller
              name="slug"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Slug</FieldLabel>
                  <Input type="text" {...field} />
                  {errors.slug && <ErrorMessage text={errors.slug.message} />}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Field className="col-span-2">
                  <FieldLabel>Description</FieldLabel>
                  <Textarea {...field} />
                  {errors.description && (
                    <ErrorMessage text={errors.description.message} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Price</FieldLabel>
                  <Input type="text" {...field} />

                  {errors.price && <ErrorMessage text={errors.price.message} />}
                </Field>
              )}
            />
            <Controller
              name="stock"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Stock</FieldLabel>
                  <Input type="text" {...field} />
                  {errors.stock && <ErrorMessage text={errors.stock.message} />}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend className="font-bold">Category</FieldLegend>
          <FieldDescription>
            Select a category to show product attributes.
          </FieldDescription>
          <FieldGroup className="grid grid-cols-2 mt-4">
            <Controller
              name="categoryId"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Category</FieldLabel>
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCategoryId(value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {categories?.map((category) => (
                          <SelectItem value={category.id} key={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend className="font-bold">Attributes</FieldLegend>
          <FieldGroup className="grid grid-cols-2">
            {categoryAttributes?.attributes.map((attribute) => {
              return (
                <Field key={attribute.id}>
                  <FieldLabel>{attribute.name}</FieldLabel>
                  {attribute.type === "TEXT" && (
                    <Controller
                      control={control}
                      name={`attributes.${attribute.slug}`}
                      render={({ field, fieldState }) => (
                        <>
                          <Input
                            type="text"
                            placeholder={attribute.name}
                            value={(field.value as string) ?? ""}
                            name={field.name}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                          {fieldState.error && (
                            <ErrorMessage text={fieldState.error.message} />
                          )}
                        </>
                      )}
                    />
                  )}
                  {attribute.type === "SELECT" && (
                    <Controller
                      control={control}
                      name={`attributes.${attribute.slug}`}
                      render={({ field, fieldState }) => (
                        <>
                          <Select
                            value={(field.value as string) ?? ""}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={attribute.name} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {attribute.options.map((option) => {
                                  return (
                                    <SelectItem value={option} key={option}>
                                      {option}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          {fieldState.error && (
                            <ErrorMessage text={fieldState.error.message} />
                          )}
                        </>
                      )}
                    />
                  )}
                  {attribute.type === "BOOLEAN" && (
                    <Controller
                      control={control}
                      name={`attributes.${attribute.slug}`}
                      render={({ field, fieldState }) => (
                        <>
                          <Select
                            value={(field.value as string) ?? ""}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={attribute.name} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="true">True</SelectItem>
                                <SelectItem value="false">False</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          {fieldState.error && (
                            <ErrorMessage text={fieldState.error.message} />
                          )}
                        </>
                      )}
                    />
                  )}
                  {attribute.type === "NUMBER" && (
                    <Controller
                      control={control}
                      name={`attributes.${attribute.slug}`}
                      render={({ field, fieldState }) => (
                        <>
                          <Input
                            type="text"
                            placeholder={attribute.name}
                            value={(field.value as string) ?? ""}
                            name={field.name}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                          {fieldState.error && (
                            <ErrorMessage text={fieldState.error.message} />
                          )}
                        </>
                      )}
                    />
                  )}
                </Field>
              );
            })}
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
      <Button
        type="submit"
        className="cursor-pointer py-4.5 font-semibold mt-5 "
      >
        Create Product
        <Plus className="size-5" />
      </Button>
    </form>
  );
}
