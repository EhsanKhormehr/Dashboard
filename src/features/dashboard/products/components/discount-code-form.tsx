"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  discountCodeDefaultValues,
  DiscountCodeFormValues,
  discountCodeSchema,
} from "../types/schema";
import ControlledInput from "@/components/common/controlled-input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorMessage from "@/components/common/error-message";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import {
  useCreateDiscountCode,
  useUpdateDiscountCode,
} from "../services/useMutation";

type DiscountCodeFormProps = {
  mode: "create" | "edit";
  initialValue?: DiscountCodeFormValues;
  id?: string;
};

const DiscountCodeForm = ({
  initialValue,
  id,
  mode,
}: DiscountCodeFormProps) => {
  const form = useForm({
    resolver: zodResolver(discountCodeSchema),
    defaultValues: initialValue ?? discountCodeDefaultValues,
  });
  const { handleSubmit, control } = form;
  const { mutate: createDiscountCode } = useCreateDiscountCode();
  const { mutate: updateDiscountCode } = useUpdateDiscountCode();

  const newDiscountCodeHandler = (data: DiscountCodeFormValues) => {
    if (mode === "create") {
      createDiscountCode(data);
    }
    if (mode === "edit") {
      if (!id) return;
      updateDiscountCode({ id, data });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(newDiscountCodeHandler)}>
        <FieldGroup className="grid grid-cols-2">
          <ControlledInput<DiscountCodeFormValues>
            name="name"
            label="Name"
            placeholder="Please enter discount name"
            type="text"
          />
          <ControlledInput<DiscountCodeFormValues>
            name="code"
            label="Code"
            placeholder="Please enter discount code"
            type="text"
          />
          <Field>
            <FieldLabel>Discount Type</FieldLabel>
            <Controller
              control={control}
              name="discountType"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Discount Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="FIXED">Fixed</SelectItem>
                        <SelectItem value="PERCENTAGE">Percentage</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {error && <ErrorMessage text={error.message} />}
                </>
              )}
            />
          </Field>
          <ControlledInput<DiscountCodeFormValues>
            name="percentage"
            label="Percentage"
            placeholder="Please enter percentage"
            type="text"
            valueAsNumber
          />
          <ControlledInput<DiscountCodeFormValues>
            name="amount"
            label="Amount"
            placeholder="Please enter amount"
            type="text"
            valueAsNumber
          />
          <ControlledInput<DiscountCodeFormValues>
            name="usageLimit"
            label="Usage Limit"
            placeholder="Please enter usage limit"
            type="text"
          />
          <Field>
            <FieldLabel>Start Date</FieldLabel>
            <Controller
              control={control}
              name="startDate"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"}>
                        {field.value
                          ? format(field.value, "PPP")
                          : "Select start date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        captionLayout="dropdown"
                        onSelect={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    </PopoverContent>
                  </Popover>
                  {error && <ErrorMessage text={error.message} />}
                </>
              )}
            />
          </Field>
          <Field>
            <FieldLabel>End Date</FieldLabel>
            <Controller
              control={control}
              name="endDate"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"}>
                        {field.value
                          ? format(field.value, "PPP")
                          : "Select end date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        captionLayout="dropdown"
                        onSelect={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    </PopoverContent>
                  </Popover>
                  {error && <ErrorMessage text={error.message} />}
                </>
              )}
            />
          </Field>
        </FieldGroup>
        <FieldGroup className="mt-6">
          <Field orientation={"horizontal"}>
            <Button type="submit" className="py-4.5 cursor-pointer">
              {mode === "create" && <Plus />}
              {mode === "create" ? "Create a Code" : "Update a Code"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </FormProvider>
  );
};

export default DiscountCodeForm;
