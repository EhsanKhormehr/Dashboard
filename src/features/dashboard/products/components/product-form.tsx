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
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  basicInfoDefaultValues,
  buildProductSchema,
  ProductFormValues,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCreateNewProduct, useUpdateProduct } from "../services/useMutation";
import ErrorMessage from "@/components/common/error-message";
import ControlledInput from "@/components/common/controlled-input";
import ControlledTextarea from "@/components/common/controlled-textarea";
import TextEditor from "@/components/common/text-editor";
import ImageUploader from "@/components/common/image-uploader";
import MultiplaImageUploader from "@/components/common/multiple-image-uploader";

type ProductFormProps = {
  mode: "create" | "edit";
  initialValue?: ProductFormValues;
  productId?: string;
};

export default function ProductForm({
  mode,
  initialValue,
  productId,
}: ProductFormProps) {
  const { data: categories } = useCategories();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    initialValue?.categoryId ?? "",
  );

  const { data: categoryAttributes } =
    useCategoryAttributes(selectedCategoryId);

  const schema = useMemo(
    () => buildProductSchema(categoryAttributes?.attributes ?? []),
    [categoryAttributes?.attributes],
  );

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(schema),
    defaultValues: initialValue ?? basicInfoDefaultValues,
    mode: "onChange",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const { mutate: createProduct } = useCreateNewProduct();
  const { mutate: updateProduct } = useUpdateProduct();

  const submitProductForm = (data: ProductFormValues) => {
    if (mode === "create") {
      createProduct(data);
    }
    if (mode === "edit") {
      if (!productId) {
        return;
      }
      updateProduct({ id: productId, data });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitProductForm)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="font-bold">Basic information</FieldLegend>
            <FieldGroup className="grid grid-cols-2">
              <ControlledInput<ProductFormValues>
                name="name"
                type="text"
                placeholder="Name"
                label="Name"
              />
              <ControlledInput<ProductFormValues>
                name="slug"
                type="text"
                placeholder="Slug"
                label="Slug"
              />
              <div className="col-span-2">
                <ControlledTextarea<ProductFormValues>
                  name="description"
                  label="Description"
                  placeholder="Description"
                />
              </div>
              <ControlledInput<ProductFormValues>
                name="price"
                type="text"
                placeholder="Price"
                label="Price"
              />
              <ControlledInput<ProductFormValues>
                name="stock"
                type="text"
                placeholder="Stock"
                label="Stock"
              />
              <div className="col-span-2">
                <ImageUploader<ProductFormValues>
                  id="thumbnail"
                  name="thumbnail"
                  label="Thumbnail"
                  initImage={initialValue?.thumbnail}
                />
                <div className="mt-5">
                  <MultiplaImageUploader<ProductFormValues>
                    name="images"
                    id="images-uploader"
                    label="Product Images"
                    initImages={initialValue?.images}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <FieldLabel className="mb-2">Expert Review</FieldLabel>
                <Controller
                  control={control}
                  name="content"
                  render={({ field }) => (
                    <TextEditor onChange={field.onChange} value={field.value} />
                  )}
                />
                {errors.content && (
                  <ErrorMessage text={errors.content.message} />
                )}
              </div>
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
                      <ControlledInput<ProductFormValues>
                        name={`attributes.${attribute.slug}`}
                        type="text"
                        placeholder={attribute.name}
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
                      <ControlledInput<ProductFormValues>
                        name={`attributes.${attribute.slug}`}
                        type="text"
                        placeholder={attribute.name}
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
    </FormProvider>
  );
}
