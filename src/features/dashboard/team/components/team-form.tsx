"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Camera } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newTeamMemberDefaultValues,
  NewTeamMemberFormValues,
  newTeamMemberSchema,
} from "../types/schema";
import ErrorMessage from "@/components/common/error-message";
import { useCreateTeamMember } from "../services/useMutation";

export default function TeamForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewTeamMemberFormValues>({
    resolver: zodResolver(newTeamMemberSchema),
    defaultValues: newTeamMemberDefaultValues,
  });

  const { mutate: createTeamMember } = useCreateTeamMember();

  const addNewTeamMemberHandler = (data: NewTeamMemberFormValues) => {
    createTeamMember(data);
  };

  return (
    <form onSubmit={handleSubmit(addNewTeamMemberHandler)}>
      <FieldSet>
        <FieldGroup className="flex flex-col items-center">
          <Label
            htmlFor="photo"
            className="bg-soft size-[80px] flex items-center justify-center rounded-full cursor-pointer"
          >
            <Camera className="size-[25px] text-dashboard-text" />
          </Label>
          <Controller
            control={control}
            name="imageUrl"
            render={({ field }) => (
              <Input
                id="photo"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const fileUrl = e.target.files?.[0].name;
                  if (!fileUrl) return;
                  field.onChange(fileUrl);
                }}
              />
            )}
          />
          <span className="font-semibold text-sm text-primary">
            Upload Photo
          </span>
        </FieldGroup>
        <FieldGroup className="max-w-[800px] grid grid-cols-1 md:grid-cols-2 px-7 mx-auto mt-6">
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <Input
                  className="bg-background rounded-sm py-6"
                  type="text"
                  placeholder="Enter your first name"
                  {...field}
                />
              )}
            />
            {errors.firstName && (
              <ErrorMessage text={errors.firstName.message} />
            )}
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <Input
                  className="bg-background rounded-sm py-6"
                  type="text"
                  placeholder="Enter your last name"
                  {...field}
                />
              )}
            />
            {errors.lastName && <ErrorMessage text={errors.lastName.message} />}
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  className="bg-background rounded-sm py-6"
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                />
              )}
            />
            {errors.email && <ErrorMessage text={errors.email.message} />}
          </Field>
          <Field>
            <FieldLabel>Phone Number</FieldLabel>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <Input
                  className="bg-background rounded-sm py-6"
                  type="text"
                  placeholder="Enter your phone number"
                  {...field}
                />
              )}
            />
            {errors.phoneNumber && (
              <ErrorMessage text={errors.phoneNumber.message} />
            )}
          </Field>
          <Field>
            <FieldLabel>Position</FieldLabel>
            <Controller
              control={control}
              name="position"
              render={({ field }) => (
                <Input
                  className="bg-background rounded-sm py-6"
                  type="text"
                  placeholder="Enter your position"
                  {...field}
                />
              )}
            />
            {errors.position && <ErrorMessage text={errors.position.message} />}
          </Field>
          <Field>
            <FieldLabel>Gender</FieldLabel>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  value={field.value}
                >
                  <SelectTrigger className="bg-background rounded-sm py-6">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="MALE">Male</SelectItem>
                      <SelectItem value="FEMALE">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && <ErrorMessage text={errors.gender.message} />}
          </Field>
        </FieldGroup>
        <FieldGroup className="flex items-center justify-center mt-10">
          <Field className="max-w-[270px]">
            <Button type="submit" className="text-[18px] font-bold py-6">
              Add Now
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
