"use client";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { ProfileFormValue, profileSchema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/error-message";
import { useUpdateUserInfo } from "../services/useMutation";

type ProfileFormProps = {
  data: ProfileFormValue;
};

const ProfileForm = ({ data }: ProfileFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileFormValue>({
    defaultValues: data,
    resolver: zodResolver(profileSchema),
  });

  const {mutate} = useUpdateUserInfo()

  const profileSubmitHandler = (data: ProfileFormValue) => {
    mutate(data)
  };
  return (
    <form onSubmit={handleSubmit(profileSubmitHandler)}>
      <div className="mt-5 flex flex-col justify-center items-center">
        <Avatar className="size-[72px]">
          <AvatarImage src={"/avatar-user.jpg"} alt="avatar"></AvatarImage>
        </Avatar>
        <div className="mt-3">
          <Input id="avatar" type="file" className="hidden" />
          <Button type="button" variant={"secondary"} asChild>
            <label htmlFor="avatar" className="cursor-pointer">
              <Upload />
              Upload Image
            </label>
          </Button>
        </div>
      </div>
      <FieldSet className="mt-5">
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-background"
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
                  type="text"
                  placeholder="Last Name"
                  className="bg-background"
                  {...field}
                />
              )}
            />
            {errors.lastName && (
              <ErrorMessage text={errors.firstName?.message} />
            )}
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Email"
                  className="bg-background"
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
                  type="text"
                  placeholder="Phone Number"
                  className="bg-background"
                  {...field}
                />
              )}
            />
            {errors.phoneNumber && (
              <ErrorMessage text={errors.phoneNumber.message} />
            )}
          </Field>
          <Field>
            <FieldLabel>User Name</FieldLabel>
            <Controller
              control={control}
              name="userName"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="User Name"
                  className="bg-background"
                  {...field}
                />
              )}
            />
            {errors.userName && <ErrorMessage text={errors.userName.message} />}
          </Field>
        </FieldGroup>
        <Field className="my-4" orientation={"horizontal"}>
          <Button className="py-4 w-full sm:w-auto" type="submit">
            Save Changes
          </Button>
        </Field>
      </FieldSet>
    </form>
  );
};

export default ProfileForm;
