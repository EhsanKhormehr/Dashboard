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
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newTeamMemberDefaultValues,
  NewTeamMemberFormValues,
  newTeamMemberSchema,
} from "../types/schema";
import ErrorMessage from "@/components/common/error-message";
import { useCreateTeamMember } from "../services/useMutation";
import ControlledInput from "@/components/common/controlled-input";

export default function TeamForm() {
  const form = useForm<NewTeamMemberFormValues>({
    resolver: zodResolver(newTeamMemberSchema),
    defaultValues: newTeamMemberDefaultValues,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const { mutate: createTeamMember } = useCreateTeamMember();

  const addNewTeamMemberHandler = (data: NewTeamMemberFormValues) => {
    createTeamMember(data);
  };

  return (
    <FormProvider {...form}>
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
            <ControlledInput<NewTeamMemberFormValues>
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              className="bg-background rounded-sm py-6"
              label="First Name"
            />
            <ControlledInput<NewTeamMemberFormValues>
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              className="bg-background rounded-sm py-6"
              label="Last Name"
            />
            <ControlledInput<NewTeamMemberFormValues>
              name="email"
              type="text"
                    placeholder="Enter your email"
              className="bg-background rounded-sm py-6"
              label="Email"
            />
            <ControlledInput<NewTeamMemberFormValues>
              name="phoneNumber"
              type="text"
                    placeholder="Enter your phone number"
              className="bg-background rounded-sm py-6"
              label="Phone Number"
            />
            <ControlledInput<NewTeamMemberFormValues>
              name="position"
              type="text"
                    placeholder="Enter your position"
              className="bg-background rounded-sm py-6"
              label="Position"
            />
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
    </FormProvider>
  );
}
