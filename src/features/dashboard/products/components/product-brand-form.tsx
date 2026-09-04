"use client";
import { Field, FieldGroup } from "@/components/ui/field";
import { FormProvider, useForm } from "react-hook-form";
import React from "react";
import {
  newBrandDefaultValues,
  NewBrandFormValues,
  newBrandSchema,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledInput from "@/components/common/controlled-input";
import ImageUploader from "@/components/common/image-uploader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCreateNewBrand, useUpdateBrand } from "../services/useMutation";

type ProductBrandFormProps = {
  mode: "create" | "edit";
  initialValue?: NewBrandFormValues;
  brandId?: string;
};

const ProductBrandForm = ({
  mode,
  initialValue,
  brandId,
}: ProductBrandFormProps) => {
  const form = useForm({
    defaultValues: initialValue ?? newBrandDefaultValues,
    resolver: zodResolver(newBrandSchema),
  });
  const { handleSubmit } = form;
  const { mutate: createNewBrand } = useCreateNewBrand();
  const { mutate: updateBrand } = useUpdateBrand();

  const newBrandHandler = (data: NewBrandFormValues) => {
    if (mode === "create") {
      createNewBrand(data);
    }
    if (!brandId) return;
    if (mode === "edit") {
      updateBrand({ id: brandId, data });
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(newBrandHandler)}>
        <FieldGroup className="grid grid-cols-2 gap-8">
          <ControlledInput<NewBrandFormValues>
            name="name"
            label="Name"
            type="text"
            placeholder="Please enter brand name"
          />
          <ControlledInput<NewBrandFormValues>
            name="slug"
            label="Slug"
            type="text"
            placeholder="Please enter brand slug"
          />
          <div className="col-span-2">
            <ImageUploader<NewBrandFormValues>
              id="logo-uploader"
              name="logo"
              label="Logo"
              initImage={initialValue?.logo}
            />
          </div>
        </FieldGroup>
        <FieldGroup className="mt-5">
          <Field orientation={"horizontal"}>
            <Button className="py-4.5 cursor-pointer" type="submit">
              <Plus />
              Create new Brand
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </FormProvider>
  );
};

export default ProductBrandForm;
