"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import React from "react";
import { provinces } from "../data/provinces";
import { Controller, useForm } from "react-hook-form";
import {
  addressFormDefaultValue,
  AddressFormValue,
  addressSchema,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/error-message";

const AddressesForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormValue>({
    resolver: zodResolver(addressSchema),
    defaultValues: addressFormDefaultValue,
    mode: "onChange",
  });

  const addressFormHandler = (data: AddressFormValue) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="flex items-center cursor-pointer py-4.5"
          variant={"outline"}
        >
          <span>Add Address</span>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[900px]">
        <form onSubmit={handleSubmit(addressFormHandler)}>
          <DialogHeader className="py-2">
            <DialogTitle>Add Address</DialogTitle>
            <DialogDescription>
              Add a shipping address for future orders.
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[80dvh] overflow-x-hidden px-3 sm:px-0 sm:overflow-hidden">
            <FieldSet>
              <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 my-6">
                <Field>
                  <FieldLabel>Province</FieldLabel>
                  <Controller
                    control={control}
                    name="province"
                    render={({ field }) => (
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {provinces.map((province) => (
                              <SelectItem
                                key={province.value}
                                value={province.value}
                              >
                                {province.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.province && (
                    <ErrorMessage text={errors.province.message} />
                  )}
                </Field>
                <Field>
                  <FieldLabel>City</FieldLabel>
                  <Controller
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="City"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                  {errors.city && <ErrorMessage text={errors.city.message} />}
                </Field>
                <Field className="sm:col-span-2">
                  <FieldLabel>Street</FieldLabel>
                  <Controller
                    control={control}
                    name="street"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="Street"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                  {errors.street && (
                    <ErrorMessage text={errors.street.message} />
                  )}
                </Field>
                <Field>
                  <FieldLabel>Building No</FieldLabel>
                  <Controller
                    control={control}
                    name="buildingNo"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="Building No"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                  {errors.buildingNo && (
                    <ErrorMessage text={errors.buildingNo.message} />
                  )}
                </Field>
                <Field>
                  <FieldLabel>
                    Unit
                    <span className="text-xs text-muted-foreground">
                      {" "}
                      (optional)
                    </span>
                  </FieldLabel>
                  <Controller
                    control={control}
                    name="unit"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="Unit"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                </Field>
                <Field>
                  <FieldLabel>Postal Code</FieldLabel>
                  <Controller
                    control={control}
                    name="postalCode"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="Postal Code"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                  {errors.postalCode && (
                    <ErrorMessage text={errors.postalCode.message} />
                  )}
                </Field>
                <Field>
                  <FieldLabel>Phone Number</FieldLabel>
                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="Phone Number"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                  {errors.phoneNumber && (
                    <ErrorMessage text={errors.phoneNumber.message} />
                  )}
                </Field>
                <Field>
                  <FieldLabel>Recipient Name</FieldLabel>
                  <Controller
                    control={control}
                    name="recipientName"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="Recipient Name"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                  {errors.recipientName && (
                    <ErrorMessage text={errors.recipientName.message} />
                  )}
                </Field>
                <Field>
                  <FieldLabel>
                    Address Label
                    <span className="text-xs text-muted-foreground">
                      (optional)
                    </span>
                  </FieldLabel>
                  <Controller
                    control={control}
                    name="addressLabel"
                    render={({ field }) => (
                      <Input
                        className="bg-background"
                        placeholder="Address Label"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                </Field>
              </FieldGroup>
              <DialogFooter className="flex justify-end">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant={"outline"}
                    className="mr-4 cursor-pointer py-4 px-3"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className=" cursor-pointer py-4 px-3">
                  Save Address
                </Button>
              </DialogFooter>
            </FieldSet>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressesForm;
